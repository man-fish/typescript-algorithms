//!pass
type Await<T> = T extends Promise<infer C> ? C : T;

type awa = Await<Promise<string> | number>;
