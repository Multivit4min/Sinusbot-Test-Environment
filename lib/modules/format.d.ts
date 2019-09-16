import { SinusbotModule } from "./Abstract";
export declare class Format extends SinusbotModule {
    backend: "ts3" | "discord";
    setBackend(backend: "ts3" | "discord"): this;
    buildModule(): {
        bold(str: string): string;
        code(str: string): string;
    };
}
