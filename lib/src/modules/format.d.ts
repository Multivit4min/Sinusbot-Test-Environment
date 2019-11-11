import { SinusbotModule } from "./Abstract";
export declare class Format extends SinusbotModule {
    buildModule(): {
        /** formats the input string to bold */
        bold(str: string): string;
        /** formats the input string to a code format */
        code(str: string): string;
    };
}
