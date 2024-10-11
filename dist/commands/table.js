"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCommand = void 0;
const clipanion_1 = require("clipanion");
require("dotenv/config");
const libsql_1 = require("drizzle-orm/libsql");
const schema = __importStar(require("../db/schema"));
const db_1 = require("../db");
const createEntry_1 = require("../db/utils/createEntry");
const input_1 = require("../utils/input");
const types_1 = require("../db/types");
class TableCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.db = (0, libsql_1.drizzle)(db_1.client, { schema });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.path[1] === 'create') {
                const tableIndex = yield (0, input_1.select)('what kind of entry? ', types_1.Tables);
                const schema = (0, createEntry_1.getSchema)(tableIndex);
                console.log(schema);
            }
            const results = yield this.db.query.users.findMany();
            this.context.stdout.write(JSON.stringify(results, null, 2));
            return 0;
        });
    }
}
exports.TableCommand = TableCommand;
TableCommand.paths = [
    ['users'],
    ['users', 'create'],
    ['users', 'delete'],
    ['users', 'update'],
    ['users', 'read']
];
TableCommand.usage = clipanion_1.Command.Usage({
    category: 'Database',
    description: 'Database Command',
    details: `
          A longer description of the command with some \`markdown code\`.
          
          Multiple paragraphs are allowed. Clipanion will take care of both reindenting the content and wrapping the paragraphs as needed.
        `,
    examples: [[
            `A basic example`,
            `$0 my-command`,
        ], [
            `A second example`,
            `$0 my-command --with-parameter`,
        ]],
});
