import { Command } from 'clipanion';

export class DatabaseCommand extends Command {
    static paths = [
        ['db']
    ];

    static usage = Command.Usage({
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

    async execute() {
        this.context.stdout.write('database\n');
    }
}
