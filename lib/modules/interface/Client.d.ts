import { SinusbotModule } from "../Abstract";
export declare class Client extends SinusbotModule {
    self: boolean;
    buildModule(): {
        isSelf(): boolean;
        chat(message: string): void;
    };
}
