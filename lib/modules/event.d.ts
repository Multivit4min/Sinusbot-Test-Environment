import { SinusbotModule } from "./Abstract";
export interface Event {
    emit(name: "chat", data: Event.ChatTarget): void;
}
export declare class Event extends SinusbotModule {
    eventHandler: Record<string, Function[]>;
    chat(data: Partial<Event.Chat>): void;
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
