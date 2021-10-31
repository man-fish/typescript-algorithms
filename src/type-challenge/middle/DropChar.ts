// TODO
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'

type DropChar<
    T extends string,
    P extends string
> = T extends `${infer L}${P}${infer R}` ? DropChar<`${L}${R}`, P> : T;
