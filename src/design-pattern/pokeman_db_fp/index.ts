import { DataBase, BeforeUpdateEvent, AfterUpdateEvent } from './Database';
import createObserver, { Listener, Observer } from './observer';

export const createPokemonDatebaseOnce = (() => {
    let instance: DataBase<Pokemon>;
    return (mode: Persistence = 'none') => {
        if (!instance) {
            instance = pokemonDatabaseFactory(mode);
        }

        return instance;
    };
})();

type Persistence = 'none' | 'aof' | 'rdb';

function pokemonDatabaseFactory(persistence: Persistence): DataBase<Pokemon> {
    switch (persistence) {
        case 'aof':
        // return createAOFPokemonDatebase();
        case 'rdb':
        // return createRDBPokemonDatebase();
        default:
            return createInMemoryPokemonDatebase();
    }
    function createAOFPokemonDatebase() {}
    function createRDBPokemonDatebase() {}
    function createInMemoryPokemonDatebase(): DataBase<Pokemon> {
        const pokemons: Record<string, Pokemon> = {};
        const preUpdateObserver: Observer<BeforeUpdateEvent<Pokemon>> =
                createObserver(),
            postUpdateObserver: Observer<AfterUpdateEvent<Pokemon>> =
                createObserver();

        return {
            set(record: Pokemon): void {
                preUpdateObserver.publish({
                    oldValue: pokemons[record.id],
                    newValue: record,
                });
                pokemons[record.id] = record;
                postUpdateObserver.publish({
                    value: record,
                });
            },

            get(id: string): Pokemon {
                return pokemons[id];
            },

            visit(visitor: (item: Pokemon) => void): void {
                Object.values(pokemons).forEach((item) => visitor(item));
            },

            best(
                scoreStrategy: (item: Pokemon) => number
            ): Pokemon | undefined {
                const found: {
                    max: number;
                    item: Pokemon | undefined;
                } = {
                    max: -1,
                    item: undefined,
                };

                Object.values(pokemons).reduce((f, c) => {
                    const score = scoreStrategy(c);

                    if (score > f.max) {
                        f.max = score;
                        f.item = c;
                    }
                    return f;
                }, found);

                return found.item;
            },

            onBeforeUpdate(
                listener: Listener<BeforeUpdateEvent<Pokemon>>
            ): () => void {
                return preUpdateObserver.subscribe(listener);
            },

            onAfterUpdate(
                listener: Listener<AfterUpdateEvent<Pokemon>>
            ): () => void {
                return postUpdateObserver.subscribe(listener);
            },
        };
    }
}
