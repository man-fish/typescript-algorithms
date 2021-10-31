class Point {
    constructor(public x: number, public y: number) {}
}
class Person {
    constructor(public name: string) {}
}
type Constructor<T> = new (...args: any[]) => T;

function TaggedMixin<T extends Constructor<{}>>(SuperClass: T) {
    return class extends SuperClass {
        _tag: string;
        constructor(...args: any[]) {
            super(...args);
            this._tag = '';
        }
    };
}
const TaggedPoint = TaggedMixin(Point);
let point = new TaggedPoint(10, 20);
point._tag = 'hello';

class Customer extends TaggedMixin(Person) {
    accountBalance: number;
}

let customer = new Customer('Joe');

customer._tag = 'test';
customer.accountBalance = 0;
