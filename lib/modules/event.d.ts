export default class Event {
    eventHandler: Record<string, Function[]>;
    /**
     * @param {string} backend the backend which should be retrieved
     */
    emit(event: string, data: any): this;
    addHandler(event: string, callback: Function): this;
    buildModule(): {
        on(name: string, callback: Function): void;
    };
}
