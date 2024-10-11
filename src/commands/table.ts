import { Command } from 'clipanion';

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '../db/schema';
import { getDb } from '../db';

import { getSchema } from '../db/utils/createEntry';
import { input, multiSelect, select } from '../utils/input';
import {Tables, type Table} from '../db/types';
import { RelationalQueryBuilder } from 'drizzle-orm/mysql-core/query-builders/query';
import { SelectedFields } from 'drizzle-orm';
import { SQLiteTable } from 'drizzle-orm/sqlite-core';

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

    async execute() {

        if (this.path[1] === 'create') {
            const tableIndex = await select('what kind of entry? ', Tables) as  Table;
            const schoma = await getSchema(tableIndex) as SQLiteTable;
            try {
                const db = await getDb();
                const results = await db.select().from(schoma);
                
                for (const result of results) {
                    this.context.stdout.write(result);
                }
                // const results = await db.select.from(tableIndex);
                // console.log(results);
            } catch (e) {
                console.error(e);
            }

            // console.log(schema);
            
        }

        return 0;
    }
}
