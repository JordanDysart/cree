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
exports.DefaultCommand = void 0;
const clipanion_1 = require("clipanion");
const file_1 = require("../utils/file");
const input_1 = require("../utils/input");
class DefaultCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.file = clipanion_1.Option.String(`-f,--file`);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.file) {
                for (const line of (0, file_1.readFileLines)(this.file)) {
                    this.context.stdout.write(`Line: ${line}\n`);
                }
            }
            else {
                const file = yield (0, input_1.input)('Enter file: ');
                for (const line of (0, file_1.readFileLines)(file)) {
                    this.context.stdout.write(`Line: ${line}\n`);
                }
            }
        });
    }
}
exports.DefaultCommand = DefaultCommand;
DefaultCommand.paths = [
    ['file'],
];
DefaultCommand.usage = clipanion_1.Command.Usage({
    description: 'file command',
    details: 'This command is the file command\nIt will read the lines of a file',
    examples: [
        ['Default command', 'default'],
    ],
});
