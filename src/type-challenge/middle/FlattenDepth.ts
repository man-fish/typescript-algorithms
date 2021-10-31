export type FlattenDepth<
    T extends any[],
    D extends number = 1,
    C extends number[] = []
> = C['length'] extends D ? T : FlattenDepth<Flatten<T>, D, [1, ...C]>;

type Flatten<T extends any[]> = T extends [infer F, ...infer R]
    ? F extends any[]
        ? [...F, ...Flatten<R>]
        : [F, ...Flatten<R>]
    : [];

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
interface Request {}

interface Handler {
    setNext(h: Handler): void;
    handle(request: Request): void;
}

class BaseHandler {
    next: Handler | null;
    constructor() {
        this.next = null;
    }
    setNext(next: Handler) {
        this.next = next;
    }
    handle(request: Request) {
        if (this.next) {
            this.next.handle(request);
        }
    }
}
