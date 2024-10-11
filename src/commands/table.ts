import { Command } from 'clipanion';

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '../db/schema';
import { client } from '../db';
import { getSchema } from '../db/utils/createEntry';
import { multiSelect, select } from '../utils/input';
import {Tables, type Table} from '../db/types';

export class TableCommand extends Command {
    static paths = [
        ['users'],
        ['users', 'create'],
        ['users', 'delete'],
        ['users', 'update'],
        ['users', 'read']
    ];

    static usage = Command.Usage({
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

    private db = drizzle(client, { schema });

    async execute() {

        if (this.path[1] === 'create') {
            const tableIndex = await select('what kind of entry? ', Tables) as keyof Table;
            const schema = getSchema(tableIndex);
            console.log(schema);
            
        }

        const results: typeof schema.users.$inferSelect[] = await this.db.query.users.findMany();
        this.context.stdout.write(JSON.stringify(results, null, 2));
        return 0;
    }
}
