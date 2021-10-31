// // TODO
// type FilterOut<T, U> = T extends [infer F, ...infer R]
//     ? F extends U
//         ? FilterOut<R, U>
//         : [F, ...FilterOut<R, U>]
//     : [];

// type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]

let m = new Map([
    ['foo', 'girl'],
    ['bar', 'boy'],
]);

let iterator = m[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let r = m.keys();

let o = {
    arr: [1, 2, 3],
    idx: 0,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.idx === 2) throw 12345;
        return this.idx < this.arr.length
            ? { value: this.arr[this.idx++], done: false }
            : { value: undefined, done: true };
    },
    throw(e: any) {
        console.log('err');
        return { value: e, done: true };
    },
    return() {
        console.log('return');
        return { value: 'return', done: true };
    },
};

// for (let i of o) {
//     if (i === 2) throw 'err';
//     console.log(i);
// }

class KeyAbleArray<T> extends Array<T> {
    keyss(): IterableIterator<number> {
        let idx = 0,
            len = this.length;
        return {
            next(): IteratorResult<number> {
                return idx < len
                    ? { value: idx++, done: false }
                    : { value: undefined, done: true };
            },
            [Symbol.iterator]() {
                return this;
            },
        };
    }
}

let aaa = new KeyAbleArray(1, 2, 3);

let ai = aaa.keyss();

console.log(ai.next());
console.log(ai.next());
console.log(ai.next());
