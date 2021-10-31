// TODO
export type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]-?: R<T, K>;
};

type R<T, K extends keyof T> = Required<T>[K];

type Required<T> = {
    [P in keyof T]-?: T[P];
};

type r = R<{ foo: number; bar?: string }, 'bar'>;
type rr = { foo: number; bar?: string }['bar'];

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

type whatOptionalDo<T> = {
    [K in keyof T]: number;
};

type ot = whatOptionalDo<{ foo?: object; bar?: string }>;

type oo = { fpp?: number };

type foo = oo['fpp'];
