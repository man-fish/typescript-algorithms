let TRUE = (x) => (y) => x;
let FALSE = (x) => (y) => y;

let toBoolean = (x) => !!x(1)(0);

console.log(toBoolean(TRUE));
console.log(toBoolean(FALSE));

let And = (x) => (y) => x(y)(FALSE);
let Or = (x) => (y) => x(TRUE)(y);
let Not = (x) => x(TRUE)(FALSE);

console.log(toBoolean(And(TRUE)(TRUE)));
console.log(toBoolean(Or(TRUE)(FALSE)));
console.log(toBoolean(Not(TRUE)));
