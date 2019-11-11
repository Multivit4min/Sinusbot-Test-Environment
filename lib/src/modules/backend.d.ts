import { SinusbotModule } from "./Abstract";
export declare class Backend extends SinusbotModule {
    buildModule(): {
        getClientByName(name: string): never;
        chat(message: string): void;
    };
}
