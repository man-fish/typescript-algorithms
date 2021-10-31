import { DeepReadonly } from './DeepReadonly';

export type Shift<T> = T extends [infer _, ...infer R] ? R : never;

type Result = Shift<[3, 2, 1]>; // [2, 1]

let y = 'x' as const; // y has type 'x'`

let x = 1 as const;

let constAssertion = {
    sign: 'foo',
    tunple: [
        'bar',
        ['tunpleInTunple'],
        {
            objInTunple: {},
        },
    ],
    obj: {
        objInObj: {},
    },
} as const;
type x = DeepReadonly<[1, 2, {}]>;

export enum ShapeFlags {
    ELEMENT = 'element',
}

function getFlagNum(num: ShapeFlags.ELEMENT) {}

getFlagNum('element' as ShapeFlags);
// src/jQuery.d.ts
// src/Animal.d.ts

declare class Animal {
    name: string;
    constructor(name: string): Animal;
    sayHi(): string;
}
