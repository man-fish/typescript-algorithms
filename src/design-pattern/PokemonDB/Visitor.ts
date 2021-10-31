import { Pokemon, MegaPokemon } from './Pokemon';
export interface Visitor {
    visitNormalPokemon(r: Pokemon): void;
    visitMegaPokemon(r: MegaPokemon): void;
}

export default class DatabaseVisitor {
    public visitMegaPokemon(r: MegaPokemon) {
        console.log(`[mega]\t${r.id}\t${r.name}\t${r.attack}\t${r.defense}`);
        console.log(`\t[base]\t${r.name}\t${r.attack}\t${r.defense}`);
    }

    public visitNormalPokemon(r: Pokemon) {
        console.log(`[normal]\t${r.id}\t${r.name}\t${r.attack}\t${r.defense}`);
    }
}
