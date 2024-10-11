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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.input = input;
exports.confirm = confirm;
exports.select = select;
exports.multiSelect = multiSelect;
exports.password = password;
exports.question = question;
const inquirer_1 = __importDefault(require("inquirer"));
function input(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'input',
            name: 'value',
            message,
        });
        return value;
    });
}
function confirm(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'confirm',
            name: 'value',
            message,
        });
        return value;
    });
}
function select(message, choices) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'list',
            name: 'value',
            message,
            choices,
        });
        return value;
    });
}
function multiSelect(message, choices) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'checkbox',
            name: 'value',
            message,
            choices,
        });
        return value;
    });
}
function password(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'password',
            name: 'value',
            message,
        });
        return value;
    });
}
function question(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = yield inquirer_1.default.prompt({
            type: 'confirm',
            name: 'value',
            message,
        });
        return value;
    });
}
