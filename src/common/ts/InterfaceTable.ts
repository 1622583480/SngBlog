export interface FunctionalStore<T> {
    (): T;
    token?: symbol;
    root?: T;
}