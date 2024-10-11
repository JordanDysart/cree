"use strict";
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
const db_1 = require("../db");
const createEntry_1 = require("../db/utils/createEntry");
const input_1 = require("../utils/input");
const types_1 = require("../db/types");
class TableCommand extends clipanion_1.Command {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.path[1] === 'create') {
                const tableIndex = yield (0, input_1.select)('what kind of entry? ', types_1.Tables);
                const schoma = yield (0, createEntry_1.getSchema)(tableIndex);
                try {
                    const db = yield (0, db_1.getDb)();
                    const results = yield db.select().from(schoma);
                    for (const result of results) {
                        this.context.stdout.write(result);
                    }
                    // const results = await db.select.from(tableIndex);
                    // console.log(results);
                }
                catch (e) {
                    console.error(e);
                }
                // console.log(schema);
            }
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
