"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileLines = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const readFileLines = (file) => {
    return node_fs_1.default.readFileSync(file, 'utf-8').split('\n');
};
exports.readFileLines = readFileLines;
