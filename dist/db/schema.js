"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const sqlite_core_1 = require("drizzle-orm/sqlite-core");
exports.users = (0, sqlite_core_1.sqliteTable)("users", {
    id: (0, sqlite_core_1.int)().primaryKey({ autoIncrement: true }),
    name: (0, sqlite_core_1.text)().notNull(),
    age: (0, sqlite_core_1.int)().notNull(),
    email: (0, sqlite_core_1.text)().notNull().unique(),
});
