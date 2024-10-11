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
exports.InputCommand = void 0;
const clipanion_1 = require("clipanion");
const db_1 = require("../../db");
const schema_1 = require("../../db/schema");
const input_1 = require("../../utils/input");
class InputCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.name = clipanion_1.Option.String({ required: false });
        this.email = clipanion_1.Option.String({ required: false });
        this.age = clipanion_1.Option.String({ required: false });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.name) {
                this.context.stdout.write(`Name is required\n`);
                return;
            }
            let email;
            if (!this.email) {
                this.context.stdout.write(`Email is required\n`);
                email = yield (0, input_1.input)('Enter email: ');
                if (!email) {
                    this.context.stdout.write(`Email is required\n`);
                    return 0;
                }
            }
            else {
                email = this.email;
            }
            if (!this.age || isNaN(parseInt(this.age))) {
                this.context.stdout.write(`Age is required\n`);
                return 0;
            }
            const user = {
                name: this.name,
                email: email,
                age: parseInt(this.age),
            };
            yield db_1.db.insert(schema_1.users).values(user);
            this.context.stdout.write(`User inserted\n`);
            const u = yield db_1.db.select().from(schema_1.users);
            this.context.stdout.write(`getting alll users from table\n`);
            for (const user of u) {
                this.context.stdout.write(`User: ${user.name} ${user.email} ${user.age}\n`);
            }
        });
    }
}
exports.InputCommand = InputCommand;
InputCommand.paths = [
    ['input']
];
InputCommand.usage = clipanion_1.Command.Usage({
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
