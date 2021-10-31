export interface Observer<E> {
    publish(e: E): void;
    subscribe(listener: Listener<E>): () => void;
}

export type Listener<EventType> = (e: EventType) => void;
export default function createObserver<EventType>(): Observer<EventType> {
    let listeners: Listener<EventType>[] = [];
    return {
        publish(e: EventType) {
            for (let listener of listeners) {
                listener(e);
            }
        },
        subscribe(listener: Listener<EventType>): () => void {
            listeners.push(listener);
            return () => listeners.filter((ls) => ls === listener);
        },
    };
}
