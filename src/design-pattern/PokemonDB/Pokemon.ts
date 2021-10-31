// interface PokemonType {
//     id: string;
//     name: string;
//     attack: number;
//     defense: number;
// }

// interface MegaPokemon extends Pokemon {
//     base: Pokemon;
// }

import { Visitor } from './Visitor';

export class Pokemon {
    constructor(
        public id: string,
        public name: string,
        public attack: number,
        public defense: number
    ) {}

    accept(visitor: Visitor) {
        visitor.visitNormalPokemon(this);
    }
}

export class MegaPokemon extends Pokemon {
    constructor(
        id: string,
        name: string,
        attack: number,
        defense: number,
        public base: Pokemon
    ) {
        super(id, name, attack, defense);
    }

    accept(visitor: Visitor) {
        visitor.visitMegaPokemon(this);
    }
}

export type PokemonTuple = [string, string, number, number];
