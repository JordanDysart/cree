import {Command, Option} from 'clipanion';
import {readFileLines} from '../utils/file';
import {input} from '../utils/input';

export class DefaultCommand extends Command {
    static paths = [
        ['file'],
    ];

    static usage = Command.Usage({
        description: 'file command',
        details: 'This command is the file command\nIt will read the lines of a file',
        examples: [
            ['Default command', 'default'],
        ],
    });

    file = Option.String(`-f,--file`);
    
    async execute() {
        if (this.file) {
            for (const line of readFileLines(this.file)) {
                this.context.stdout.write(`Line: ${line}\n`);
            }
        } else {
            const file = await input('Enter file: ');
            for (const line of readFileLines(file)) {
                this.context.stdout.write(`Line: ${line}\n`);
            }
        }
    }
}
