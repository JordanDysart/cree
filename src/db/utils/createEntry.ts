import * as schema from '../schema';
import {type Table} from '../types';

export const getSchema = async (table: keyof Table) => {
  const tableSchema = schema[table];
  return tableSchema;
};

