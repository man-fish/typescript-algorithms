// b.mjs
console.log(2);
import { foo } from './a.mjs';
console.log('b.mjs');
console.log(foo);
export let bar = 'bar';
