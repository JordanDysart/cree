#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
// database commands
const database_1 = require("./commands/database");
const table_1 = require("./commands/table");
// learning commands
const default_1 = require("./commands/default");
const input_1 = require("./commands/input");
const cli = new clipanion_1.Cli({
    binaryLabel: "Cree CLI",
    binaryName: 'cree',
    binaryVersion: "1.0.0",
    enableColors: true,
});
cli.register(database_1.DatabaseCommand);
cli.register(table_1.TableCommand);
cli.register(default_1.DefaultCommand);
cli.register(input_1.InputCommand);
cli.register(clipanion_1.Builtins.HelpCommand);
cli.runExit(process.argv.slice(2));
