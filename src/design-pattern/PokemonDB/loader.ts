import * as fs from 'fs';

export interface RecordHandler<T> {
    addRecord(record: T): void;
}

export function loader<T>(path: string, handler: RecordHandler<T>) {
    const data: T[] = JSON.parse(fs.readFileSync(path).toString());
    data.forEach((record) => handler.addRecord(record));
}
