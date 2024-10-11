import fs from 'node:fs';

export const readFileLines = (file: string): string[] => {
    return fs.readFileSync(file, 'utf-8').split('\n');
}
