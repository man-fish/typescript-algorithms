class MonotonicQueue {
    private queue: number[];
    constructor() {
        this.queue = [];
    }

    push(n: number) {
        while (this.queue.length && this.queue[this.queue.length - 1] < n) {
            this.queue.pop();
        }

        this.queue.push(n);
    }

    pop(n: number) {
        if (this.queue.length && n === this.queue[0]) {
            this.queue.shift();
        }
    }
    
    max() {
        return this.queue.length ? this.queue[0] : -1;
    }
}

