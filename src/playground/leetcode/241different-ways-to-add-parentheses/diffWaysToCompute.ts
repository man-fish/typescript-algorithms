type Operator = '+' | '-' | '*';

function isDigit(str: string) {
    return !Number.isNaN(Number(str));
}

function isOperator(c: string): c is Operator {
    return c === '+' || c === '-' || c === '*';
}

function calculate(n1: number, n2: number, op: Operator): number {
    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        default:
            return 0;
    }
}

export function diffWaysToCompute(expression: string): number[] {
    if (isDigit(expression)) {
        return [Number(expression)];
    }

    let res: number[] = [];

    for (let i = 0; i < expression.length; i++) {
        let c = expression[i];
        if (isOperator(c)) {
            let lReses = diffWaysToCompute(expression.slice(0, i));
            let rReses = diffWaysToCompute(expression.slice(i + 1));

            for (let lRes of lReses) {
                for (let rRes of rReses) {
                    res.push(calculate(lRes, rRes, c));
                }
            }
        }
    }

    return res;
}

console.log(diffWaysToCompute('2*3-4*5'));
