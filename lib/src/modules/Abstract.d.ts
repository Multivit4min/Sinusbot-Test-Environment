import { Sinusbot } from "../Sinusbot";
export declare abstract class SinusbotModule {
    protected sinusbot: Sinusbot;
    constructor(sinusbot: Sinusbot);
    /**
     *
     * @param method the function name which has been called
     */
    logFunctionCall(method: string): (...args: any[]) => void;
    /**
     * the module data which gets exported to the sinusbot engine
     */
    abstract buildModule(): Record<string, any>;
}
