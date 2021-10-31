type UndoCommand<State> = (state: State) => State;

type CommandFunction<State> = (state: State) => [State, UndoCommand<State>];

function createCommandStack<State>(state: State) {
    let stack: UndoCommand<State>[] = [];
    let _state = state;

    return {
        execute(command: CommandFunction<State>) {
            let [newState, undo] = command(_state);
            _state = newState;
            stack.push(undo);
            return newState;
        },
        undo() {
            let undo = stack.pop();
            if (undo) {
                _state = undo(_state);
            }
            return _state;
        },
    };
}

const addOne: CommandFunction<number> = (state: number) => {
    return [state + 1, (state) => state - 1];
};

const substractOne: CommandFunction<number> = (state: number) => {
    return [state - 1, (state) => state + 1];
};

const createSetValue = (value: number): CommandFunction<number> => {
    return (state) => [value, () => state];
};

const cStack = createCommandStack(0);
console.log(cStack.execute(addOne));
console.log(cStack.undo());
console.log(cStack.execute(substractOne));
console.log(cStack.undo());
console.log(cStack.execute(createSetValue(40)));
console.log(cStack.undo());

function isSubSeq(a: string, b: string): void {
    let r = ret(a, b);
    console.log(r);
}

function ret(a: string, b: string): boolean {
    let i = 0,
        j = 0;
    while (true) {
        if (i === a.length) {
            return true;
        }
        if (j === b.length) {
            return false;
        }

        if (a[i] === b[j]) {
            i++;
        }
        j++;
    }
}

console.log(ret('abc', 'eadc'));
