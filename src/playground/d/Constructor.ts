function factory<T extends Constructor<{}>>(Cons: T) {
    return new Cons();
}

// export interface Foor {
//     name: string;
// }

// let Foor: Constructor<Foo> = function (this: Foor, name: string) {
//     this.name = name;
// };

interface Nil {}

class Foo implements Nil {
    constructor() {}
}

export type Constructor<T extends Nil> = {
    new (...args: any[]): T;
};

let obj: Constructor<Foo> = {};

function defineCp(option: Nil): Constructor<Nil> {
    return option;
}

let a: never = null!;
