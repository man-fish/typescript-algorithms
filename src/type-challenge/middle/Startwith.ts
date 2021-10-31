// TODO
export type StartsWith<
    S extends string,
    P extends string
> = S extends `${P}${infer _}` ? true : false;

type a = StartsWith<'abc', 'ac'>; // expected to be false
type b = StartsWith<'abc', 'ab'>; // expected to be true
type c = StartsWith<'abc', 'abcd'>; // expected to be false
