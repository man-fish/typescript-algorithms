type EventHandler = (...args: any[]) => void;
interface EventChannel {
    on(event: string, callback: EventHandler): void;
    once(event: string, callback: EventHandler): void;
    off(event: string, callback: EventHandler): void;
    emit(event: string, ...args: any[]): void;
}

class ConcreteEventChannel implements EventChannel {
    private subjects: Record<string, EventHandler[]>;
    constructor() {
        this.subjects = {};
    }

    on(event: string, callback: EventHandler) {
        (this.subjects[event] || (this.subjects[event] = [])).push(callback);
    }

    once(event: string, callback: EventHandler) {
        let onceHandler = (...args: any[]) => {
            this.off(event, onceHandler);
            callback(...args);
        };
        this.on(event, onceHandler);
    }

    emit(event: string, ...args: any[]) {
        let cbs = this.subjects[event];
        if (!cbs) {
            return;
        }
        for (let cb of cbs) {
            cb(...args);
        }
    }

    off(event: string, callback?: EventHandler) {
        let cbs = this.subjects[event];
        if (!cbs) {
            return false;
        }
        if (!callback) {
            cbs.length = 0;
        } else {
            for (let i = 0; i < cbs.length; i++) {
                if (cbs[i] === callback) {
                    cbs.splice(i, 1);
                    break;
                }
            }
        }
    }
}
