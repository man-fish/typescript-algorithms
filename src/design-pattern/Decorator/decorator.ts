// function sealed() {
//     console.log('1');
// }

// @sealed
// function method()  {
//     console.log(2);
// }

// method();

interface Greetable {
    greet(): void;
}

function qqDecorator<T extends new (...args: any[]) => Greetable>(
    SuperClass: T
) {
    return class extends SuperClass {
        greet() {
            super.greet();
            console.log('qq hello');
        }
    };
}

@qqDecorator
class Greeter {
    greet() {
        console.log('basic hello');
    }
}

console.log(new Greeter());

let greeter = {
    greet() {
        console.log('basic hello');
    },
};

function qqDecoratorSimple<T extends Greetable>(greeter: T) {
    return {
        greet() {
            greeter.greet();
            console.log('qq hello');
        },
    };
}

function createGreeter(name: string) {
    return {
        isOnline: false,
        greet() {
            console.log('basic hello, my name is', name);
        },
    };
}

function qqEnhance<T extends ReturnType<typeof createGreeter>>(
    createGreeter: (name: string) => T
) {
    return (name: string) => {
        let greeter = createGreeter(name);
        greeter.isOnline = true; // 属性增强；
        return {
            greet() {
                greeter.greet(); // 方法增强；
                console.log('i am a qq user');
            },
        };
    };
}

// let qqGreeter = qqEnhance(createGreeter('bob'));
