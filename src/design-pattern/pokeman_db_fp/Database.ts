import { Listener } from './observer';
export interface BaseRecord {
    id: string;
}

export interface BeforeUpdateEvent<T> {
    oldValue: T;
    newValue: T;
}

export interface AfterUpdateEvent<T> {
    value: T;
}

export interface DataBase<T extends BaseRecord> {
    get(id: string): T | undefined;
    set(record: T): void;
    visit(visitor: (item: Pokemon) => void): void;
    best(scoreStrategy: (item: T) => number): T | undefined;
    onBeforeUpdate(listener: Listener<BeforeUpdateEvent<T>>): () => void;
    onAfterUpdate(listener: Listener<AfterUpdateEvent<T>>): () => void;
}
