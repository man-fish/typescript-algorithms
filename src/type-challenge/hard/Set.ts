export type Set<
    T,
    Path extends string,
    U
> = Path extends `${infer K}.${infer R}`
    ? K extends keyof T
        ? {
              [P in keyof T]: P extends K ? Set<T[P], R, U> : T[P];
          }
        : never
    : Path extends keyof T
    ? { [K in keyof T]: K extends Path ? U : T[K] }
    : never;

type C = Set<{ foo: { bar: { zcc: number } } }, 'foo.bar.zcc', string>;
// -> {foo: {bar: {zcc: string}}}
