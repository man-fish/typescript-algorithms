import { DataBase } from './Database';
import { RecordHandler } from './loader';
import { Pokemon, PokemonTuple } from './Pokemon';

export default class PokemonDBAdapter implements RecordHandler<PokemonTuple> {
    constructor(private adaptee: DataBase<Pokemon>) {}
    addRecord(record: PokemonTuple): void {
        this.adaptee.set(new Pokemon(...record));
    }
}
