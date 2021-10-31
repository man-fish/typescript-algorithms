function sum(...args: number[]) {
    function callback(...nextArgs: number[]) {
        return sum(...[...args, ...nextArgs]);
    }
    callback.sumof = () => {
        return args.reduce((p, v) => {
            return p + v;
        });
    };
    return callback;
}

console.log(sum(1, 2)(3, 4).sumof());

// let curry: Curry<() => any> = (cb) => {
//     let rest = cb.length;
//     return function (...args) {
//         if (rest === args.length) {
//             return cb(...args);
//         }
//         return curry(cb.bind(ø, ...args));
//     };
// };

type Curry<F> = (
    f: F
) => F extends (...args: [infer _, ...infer R]) => infer T
    ? Curry<(...args: R) => T>
    : never;
