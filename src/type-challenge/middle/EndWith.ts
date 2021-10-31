// TODO
export type EndWith<
    S extends string,
    P extends string
> = S extends `${infer _}${P}` ? true : false;

type res_0 = EndWith<'abc', 'ac'>; // expected to be false
type res_1 = EndWith<'abc', 'bc'>; // expected to be true
