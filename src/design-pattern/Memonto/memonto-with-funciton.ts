type CommandFunction<State> = (state: State) => State;

export function createMementoStack<State>(state: State) {
    let stack: string[] = [JSON.stringify(state)];

    return {
        execute(command: CommandFunction<State>) {
            let prevState = JSON.parse(stack[stack.length - 1]);
            let nextState = command(prevState);
            let stateSnapshot = JSON.stringify(nextState);
            stack.push(stateSnapshot);
            return nextState;
        },
        undo() {
            if (stack.length > 1) {
                stack.pop()!;
            }

            return JSON.parse(stack[stack.length - 1]);
        },
    };
}

const addOne: CommandFunction<number> = (state: number) => state + 1;
const substractOne: CommandFunction<number> = (state: number) => state - 1;
const createSetValue: (value: number) => CommandFunction<number> =
    (value: number) => () =>
        value;

let mementoStack = createMementoStack(0);
console.log(mementoStack.execute(addOne));
console.log(mementoStack.undo());
console.log(mementoStack.execute(substractOne));
console.log(mementoStack.undo());
console.log(mementoStack.execute(createSetValue(100)));
console.log(mementoStack.undo());
