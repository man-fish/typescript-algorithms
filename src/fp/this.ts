namespace THIS {
    let obj = {
        a: 1,
        doSomething() {
            return () => {
                console.log(this.a);
            };
        },
    };
    let objDoSomething = obj.doSomething();
    let notObjDoSomething = obj.doSomething;
    objDoSomething();
    notObjDoSomething()();
}
