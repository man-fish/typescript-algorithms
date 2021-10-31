let ZERO = (f) => (x) => x;
let ONE = (f) => (x) => f(x);
let TWO = (f) => (x) => f(f(x));
let THREE = (f) => (x) => f(f(f(x)));

let toNumber = (x) => x((num) => num + 1)(0);

let add = (x) => (y) => (_f) => (_x) => x(_f)(y(_f)(_x));
let mult = (x) => (y) => (_f) => (_x) => x(y(_f))(_x);

let FIVE = add(TWO)(THREE);
let SIX = mult(TWO)(THREE);

console.log(toNumber(FIVE));
console.log(toNumber(SIX));
