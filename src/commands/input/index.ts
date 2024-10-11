import { Command, Option } from 'clipanion';

import { getDb } from '../../db';
import { users } from '../../db/schema';
import { input } from '../../utils/input';

export class InputCommand extends Command {
    static paths = [
        ['input']
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

    name = Option.String({required: false});
    email = Option.String({required: false});
    age = Option.String({required: false});

    async execute() {

        if (!this.name){
            this.context.stdout.write(`Name is required\n`);
            return;
        }

        let email;
        if (!this.email){
            this.context.stdout.write(`Email is required\n`);
            email = await input('Enter email: ');

            if  (!email){
                this.context.stdout.write(`Email is required\n`);
                return 0;
            }
        } else {
            email = this.email;
        }

        if (!this.age || isNaN(parseInt(this.age))){
            this.context.stdout.write(`Age is required\n`);
            return 0;
        }

        const user: typeof users.$inferInsert = {
            name: this.name,
            email: email,
            age: parseInt(this.age),
        };

        const db = await getDb();

        await db.insert(users).values(user);
        this.context.stdout.write(`User inserted\n`);

        const u = await db.select().from(users);
        this.context.stdout.write(`getting alll users from table\n`);
        for (const user of u) {
            this.context.stdout.write(`User: ${user.name} ${user.email} ${user.age}\n`);
        }
    }
}
