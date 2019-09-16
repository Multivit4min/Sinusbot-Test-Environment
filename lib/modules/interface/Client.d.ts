import { SinusbotModule } from "../Abstract";
export declare class Client extends SinusbotModule {
    self: boolean;
    chatMock: (msg: string) => void;
    buildModule(): {
        isSelf(): boolean;
        chat(message: string): void;
    };
}
