// !DONE
export type Get<T, Path extends string> = Path extends `${infer K}.${infer R}`
    ? K extends keyof T
        ? Get<T[K], R>
        : never
    : Path extends keyof T
    ? T[Path]
    : never;

type Data = {
    foo: {
        bar: {
            value: 'foobar';
            count: 6;
        };
        included: true;
    };
    hello: 'world';
};

type A = Get<Data, 'hello'>; // 'world'
type B = Get<Data, 'foo.bar.count'>; // 6
type C = Get<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }
