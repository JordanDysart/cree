import 'dotenv/config';
import { drizzle } from 'drizzle-orm/connect';

export const getDb = async () => {
  return await drizzle("libsql", process.env.DB_FILE_NAME!);
}

