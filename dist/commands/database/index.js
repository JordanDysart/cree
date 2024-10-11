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
exports.DatabaseCommand = void 0;
const clipanion_1 = require("clipanion");
class DatabaseCommand extends clipanion_1.Command {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            this.context.stdout.write('database\n');
        });
    }
}
exports.DatabaseCommand = DatabaseCommand;
DatabaseCommand.paths = [
    ['db']
];
DatabaseCommand.usage = clipanion_1.Command.Usage({
    category: 'Database',
    description: 'Database Command',
    details: `
          A longer description of the command with some \`markdown code\`.
          
          Multiple paragraphs are allowed. Clipanion will take care of both reindenting the content and wrapping the paragraphs as needed.
        `,
    examples: [[
            `read `,
            `$0 db`,
        ], [
            `A second example`,
            `$0 db create`,
        ]],
});
