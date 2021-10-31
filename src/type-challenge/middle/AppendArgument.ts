// export type AppendArgument<F extends (...args: never) => any, T> = F extends (
//     ...args: infer A
// ) => infer R
//     ? (...args: [...A, T]) => R
//     : never;

type Fn = (a: number, b: string) => number;
type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type AppendArgument<F extends (...args: never[]) => any, G> = F extends (
    ...args: infer A
) => infer R
    ? (...args: [...A, G]) => R
    : never;

Object.assign;
