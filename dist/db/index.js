"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
require("dotenv/config");
const libsql_1 = require("drizzle-orm/libsql");
const client_1 = require("@libsql/client");
exports.client = (0, client_1.createClient)({ url: process.env.DB_FILE_NAME });
exports.db = (0, libsql_1.drizzle)(exports.client);
