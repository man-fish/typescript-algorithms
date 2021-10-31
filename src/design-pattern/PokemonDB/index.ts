import {
    DataBase,
    BaseRecord,
    BeforeUpdateEvent,
    AfterUpdateEvent,
} from './Database';
import { Pokemon } from './Pokemon';
import Observer, { Listener, Observe } from './Observer';
import { Visitor } from './Visitor';

abstract class InMemoryDatabase<T extends BaseRecord> implements DataBase<T> {
    protected records: Record<string, T> = {};
    private preUpdateObserver: Observe<BeforeUpdateEvent<T>> = new Observer();
    private postUpdateObserver: Observe<AfterUpdateEvent<T>> = new Observer();

    public get(id: string): T {
        return this.records[id];
    }

    public set(record: T) {
        this.preUpdateObserver.publish({
            oldValue: this.records[record.id],
            newValue: record,
        });
        this.records[record.id] = record;
        this.postUpdateObserver.publish({
            value: record,
        });
    }

    public best(scoreStrategy: (item: T) => number): T | undefined {
        const found: {
            max: number;
            item: T | undefined;
        } = {
            max: -1,
            item: undefined,
        };

        Object.values(this.records).reduce((f, c) => {
            const score = scoreStrategy(c);

            if (score > f.max) {
                f.max = score;
                f.item = c;
            }
            return f;
        }, found);

        return found.item;
    }

    public onBeforeUpdate(
        listener: Listener<BeforeUpdateEvent<T>>
    ): () => void {
        return this.preUpdateObserver.subscribe(listener);
    }

    public onAfterUpdate(listener: Listener<AfterUpdateEvent<T>>): () => void {
        return this.postUpdateObserver.subscribe(listener);
    }
}

export class PokemonDB extends InMemoryDatabase<Pokemon> {
    private static dbInstance: PokemonDB;
    private constructor() {
        super();
    }

    public static getInstance(): PokemonDB {
        // lazy load
        if (PokemonDB.dbInstance) {
            PokemonDB.dbInstance = new PokemonDB();
        }
        return PokemonDB.dbInstance;
    }

    public visit(visitor: Visitor): void {
        Object.values(this.records).forEach((item) => item.accept(visitor));
    }
}

export default class DatebaseFactory {
    static getDatabaseInstance() {
        return PokemonDB.getInstance();
    }
}
