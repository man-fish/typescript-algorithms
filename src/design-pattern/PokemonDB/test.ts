export let proto = {};
Object.defineProperty(proto, 'foo', {
    value: 'bar',
    // writable: true,
});

let obj = Object.create(proto);
console.log(obj.foo);
obj.foo = 'zcc';
console.log(obj.foo);
