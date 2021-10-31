abstract class Command<State> {
    abstract execute(state: State): State;
}

export class CommandMementoStack<State> {
    private stack: string[] = [];
    constructor(state: State) {
        this.stack.push(JSON.stringify(state));
    }
    get state() {
        return JSON.parse(this.stack[this.stack.length - 1]);
    }

    execute(command: Command<State>) {
        let stateSnapshot = JSON.stringify(command.execute(this.state));
        this.stack.push(stateSnapshot);
    }

    undo() {
        if (this.stack.length > 1) {
            const stateSnapshot = this.stack.pop()!;
            return JSON.parse(stateSnapshot);
        }
    }
}

class AddOne extends Command<number> {
    execute(state: number) {
        return state + 1;
    }
}

class Substract extends Command<number> {
    execute(state: number) {
        return state - 1;
    }
}

class SetValue extends Command<number> {
    constructor(private value: number) {
        super();
    }
    execute(state: number) {
        return this.value;
    }
}
