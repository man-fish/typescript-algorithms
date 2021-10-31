let factorial = (n) => (n > 0 ? factorial(n - 1) * n : n === 0 ? 1 : 0);

let arr = ['a', 'b', 'c', 'd'];

function reverse(arr) {
    return arr.reduce(function (acc, x) {
        return [x].concat(acc);
    }, []);
}

console.log(reverse(arr));
