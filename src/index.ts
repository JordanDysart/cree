#!/usr/bin/env node

import { Builtins, Cli } from "clipanion";

// database commands
import { DatabaseCommand } from "./commands/database";
import { TableCommand } from "./commands/table";

// learning commands
import { DefaultCommand } from "./commands/default";
import { InputCommand } from "./commands/input";


const cli = new Cli({
    binaryLabel: "Cree CLI",
    binaryName: 'cree',
    binaryVersion: "1.0.0",
    enableColors: true,
});

cli.register(DatabaseCommand);
cli.register(TableCommand);

cli.register(DefaultCommand);
cli.register(InputCommand);

cli.register(Builtins.HelpCommand);
cli.runExit(process.argv.slice(2));

