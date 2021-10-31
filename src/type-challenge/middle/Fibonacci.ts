// !DONE
type Fibonacci<T extends number> = GenerateFib<[1], [1], [1, 1, 1], T>;
type GenerateFib<
    PrePre extends number[],
    Pre extends number[],
    Count extends number[],
    N
> = Count['length'] extends N
    ? [...PrePre, ...Pre]['length']
    : GenerateFib<Pre, [...PrePre, ...Pre], [...Count, 1], N>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21
