export interface Observe<E> {
    publish(e: E): void;
    subscribe(listener: Listener<E>): () => void;
}

export type Listener<EventType> = (e: EventType) => void;

class Observer<EventType> implements Observe<EventType> {
    private listeners: Listener<EventType>[] = [];
    publish(e: EventType) {
        for (let listener of this.listeners) {
            listener(e);
        }
    }
    subscribe(listener: Listener<EventType>): () => void {
        this.listeners.push(listener);
        return () => this.listeners.filter((ls) => ls === listener);
    }
}

export default Observer;
