import * as schema from './schema';
import { type InferSelectModel, type InferInsertModel } from 'drizzle-orm'

export const Tables = Object.keys(schema);
export type Table = keyof typeof Tables;

export type SelectUser = InferSelectModel<typeof schema.users>;
export type InsertUser = InferInsertModel<typeof schema.users>;

