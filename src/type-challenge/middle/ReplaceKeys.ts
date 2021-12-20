// TODO
type NodeA = {
    type: 'A';
    name: string;
    flag: number;
};

type NodeB = {
    type: 'B';
    id: number;
    flag: number;
};

type NodeC = {
    type: 'C';
    name: string;
    flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

// {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplaceKeys<T, M extends keyof S, S> = {
    [K in keyof T]: K extends M ? S[K] : T[K];
};

type ReplacedNodes = ReplaceKeys<
    NodeA,
    'name' | 'flag',
    { name: number; flag: string }
>;
