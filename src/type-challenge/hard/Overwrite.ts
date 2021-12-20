type TEST1 = { a: number; b: string }['a' | 'b'];

export type Diff<T extends keyof any, U extends keyof any> = ({
    [K in T]: K;
} & { [K in U]: never } & { [propName: string]: never })[T];

export type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;

type Overwrited = Overwrite<{ a: 1 }, { a: 2 }>;
const a: Overwrited = { a: 2 };

// Promise<Promise<T>>.then(v => type v is Promise<T>).
declare function asc<T>(): Promise<Promise<T>>;
asc<number>().then((v) => {
    type v is Promsie<number>;
});
