// !DONE
export type Flip<T extends Record<string, string>> = {
    [K in keyof T as T[K]]: K;
};
type test = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'};
