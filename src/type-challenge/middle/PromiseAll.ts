type InferFromT<P extends any[]> = P extends Array<infer U> ? U : never;
type combinaPromise<P extends any[]> = P extends Promise<infer U>[]
    ? (args: Promise<U>[]) => Promise<U>
    : never;

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

declare function PromiseAll<T extends any[]>(
    values: readonly [...T]
): Promise<{
    [key in keyof T]: T[key] extends PromiseLike<infer V> ? V : T[key];
}>;

// expected to be `Promise<[number, number, string]>`
const p = Promise.all([promise1, promise2, promise3] as const);

Promise.prototype.all = <T extends any[]>(
    promiseLike: readonly [...T]
): Promise<{
    [key in keyof T]: T[key] extends PromiseLike<infer V> ? V : T[key];
}> => {
    let totalTask = promiseLike.length,
        restTask = totalTask;
    let results: {
        [key in keyof T]: T[key] extends PromiseLike<infer V> ? V : T[key];
    } = new Array(totalTask);
    return new Promise((resolve, reject) => {
        for (let i = 0; i < totalTask; i++) {
            promiseLike[i]
                .then((res: T) => {
                    restTask--;
                    results[i] = res;
                    if (restTask === 0) {
                        resolve(results);
                    }
                })
                .catch((err: T) => {
                    reject(err);
                });
        }
    });
};

Promise.prototype.all = <T extends any[]>(promiseLike: Promise<T>[]) => {
    let restTask = promiseLike.length;
    let results = new Array(restTask);
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promiseLike.length; i++) {
            promiseLike[i]
                .then((res) => {
                    restTask--;
                    results[i] = res;
                    if (restTask === 0) {
                        resolve(results);
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        }
    });
};

Promise.all([promise1, promise2, promise3] as const).then((res) => {
    console.log(res);
});

Promise.prototype.race = <T extends any[]>(promiseLike: Promise<T>[]) => {
    return new Promise((resolve, reject) => {
        promiseLike.forEach((promise) => {
            promise
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    });
};

Promise.race([promise1, promise2, promise3] as const).then((res) => {
    console.log(res);
});
