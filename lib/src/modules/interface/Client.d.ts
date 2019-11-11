import { SinusbotModule } from "../Abstract";
export declare class Client extends SinusbotModule {
    /** output of client.isSelf() */
    self: boolean;
    /** function for client.chat() */
    chatMock: (...args: any[]) => void;
    /** uid of the user */
    uid: string;
    /** name of the client */
    name: string;
    buildModule(): {
        isSelf(): boolean;
        chat(message: string): void;
        uid(): string;
        name(): string;
    };
}
