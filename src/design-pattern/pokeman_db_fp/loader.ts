import * as fs from 'fs';

export type PokemonTuple = [string, number, number];

export interface RecordHandler<T> {
    addRecord(record: T): void;
}

export function jsonLoader<T>(path: string, handler: RecordHandler<T>) {
    const data: T[] = JSON.parse(fs.readFileSync(path).toString());
    data.forEach((record) => handler.addRecord(record));
}
