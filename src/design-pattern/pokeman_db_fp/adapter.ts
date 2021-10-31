import { DataBase } from './Database';
import { PokemonTuple, RecordHandler } from './loader';

export default function pokemonDBAdapter(
    adaptee: DataBase<Pokemon>
): RecordHandler<PokemonTuple> {
    return {
        addRecord(record: PokemonTuple): void {
            adaptee.set({
                id: record[0],
                attack: record[1],
                defense: record[2],
            });
        },
    };
}
