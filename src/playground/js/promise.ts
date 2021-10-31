const __DEV__ = false;

type Executor<T> = (
    resolve: (value: T) => void,
    reject: (reason: any) => void
) => void;

const FULLFILL = Symbol(__DEV__ ? 'fullfill' : '');
const REJECTED = Symbol(__DEV__ ? 'rejected' : '');
const PENDING = Symbol(__DEV__ ? 'pending' : '');

type PromiseStatement = typeof FULLFILL | typeof REJECTED | typeof PENDING;

interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?:
            | ((value: T) => T | TResult1 | Promise<TResult1>)
            | undefined,
        onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined
    ): Promise<T | TResult1 | TResult2>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
        onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined
    ): Promise<T | TResult>;
}

function isPromise(promiseLike: any): promiseLike is Promise<any> {
    return promiseLike instanceof MyPromise;
}

export default class MyPromise<T> implements Promise<T> {
    private _result: T | any;
    private _status: PromiseStatement;
    private callbackStack: {
        onResolve: () => void;
        onReject: () => void;
    }[];
    constructor(executor: Executor<T>) {
        this._status = PENDING;
        this._result = undefined;
        this.callbackStack = [];
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    private resolve(value: T) {
        if (this._status !== PENDING) return;

        this._status = FULLFILL;
        this._result = value;

        this.callbackStack.forEach((callback) => {
            callback.onResolve();
        });
    }

    private reject(reason: any) {
        if (this._status !== PENDING) return;

        this._status = REJECTED;
        this._result = reason;

        this.callbackStack.forEach((callback) => {
            callback.onReject();
        });
    }

    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: (value: T) => T | TResult1 | Promise<TResult1>,
        onrejected?: (reason: any) => TResult2 | Promise<TResult2>
    ): Promise<T | TResult1 | TResult2> {
        onfulfilled =
            typeof onfulfilled === 'function'
                ? onfulfilled
                : (value: T) => value;
        onrejected =
            typeof onrejected === 'function'
                ? onrejected
                : (reason: TResult2) => {
                      throw reason;
                  };
        const self = this;

        return new MyPromise<T | TResult1 | TResult2>((resolve, reject) => {
            const handle = (
                callback:
                    | ((value: T) => TResult1 | Promise<TResult1>)
                    | ((reason: any) => TResult2 | Promise<TResult2>)
            ) => {
                try {
                    const result = callback(self._result);

                    if (isPromise(result)) {
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            };

            if (self._status === PENDING) {
                self.callbackStack.push({
                    onResolve() {
                        handle(
                            onfulfilled as (
                                value: T
                            ) => TResult1 | Promise<TResult1>
                        );
                    },
                    onReject() {
                        handle(
                            onrejected as (
                                reason: any
                            ) => TResult2 | Promise<TResult2>
                        );
                    },
                });
            } else {
                setTimeout(() => {
                    handle(
                        self._status === FULLFILL
                            ? (onfulfilled as (
                                  value: T
                              ) => TResult1 | Promise<TResult1>)
                            : (onrejected as (
                                  reason: any
                              ) => TResult2 | Promise<TResult2>)
                    );
                });
            }
        });
    }

    catch<TResult = never>(
        onReject?: (reason: any) => TResult | Promise<TResult>
    ) {
        return this.then(undefined, onReject);
    }

    static resolve<TResult>(value: TResult) {
        return new MyPromise<TResult>((resolve) => resolve(value));
    }

    static reject(reason: any) {
        return new MyPromise((_, reject) => reject(reason));
    }
}
