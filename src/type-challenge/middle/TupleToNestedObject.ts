export type TupleToNestedObject<T extends any[], U> = T extends [
    infer H,
    ...infer R
]
    ? H extends string
        ? {
              [K in H]: R extends string[]
                  ? TupleToNestedObject<R, U>
                  : TupleToNestedObject<[], U>;
          }
        : never
    : U;

type a = TupleToNestedObject<['a'], string>; // {a: string}
type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

type testFn<T extends number[]> = T extends [infer H, ...infer R] ? never : T;
type test = testFn<[]>;
