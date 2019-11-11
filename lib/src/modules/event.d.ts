import { SinusbotModule } from "./Abstract";
export interface Event {
    emit(name: "chat", data: Event.ChatTarget): void;
}
export declare class Event extends SinusbotModule {
    eventHandler: Record<string, Function[]>;
    /**
     * emits a chat event to the sinusbot scripting engine
     * @param data the payload data for the event
     */
    chat(data: Partial<Event.Chat>): void;
    /** registers a new event handler */
    addHandler(event: string, callback: Function): this;
    buildModule(): {
        on(name: string, callback: Function): void;
    };
}
export declare namespace Event {
    enum ChatTarget {
        PRIVATE = 1,
        CHANNEL = 2,
        SERVER = 3
    }
    interface Chat {
        text: string;
        channel: any;
        client: any;
        mode: Event.ChatTarget;
    }
}
