let mixin = (superClass) =>
    class extends superClass {
        constructor(...args) {
            super(...args);
        }
        foo() {
            console.log('mixin1.foo');
            if (super.foo) super.foo();
        }
    };

class GF {
    constructor(name) {
        this.name = name;
    }
    foo() {
        console.log('GF.foo');
    }
}

class SON extends mixin(GF) {
    constructor(name) {
        super(name);
        console.log('SON');
        super.foo();
    }
}

let xiaoming = new SON('小明');

class FUCK {
    clickk = () => {
        console.log(this);
    };
}

let fff = new FUCK();

let fn1 = fff.clickk;

fn1();
