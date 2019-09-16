import { Engine } from "./modules/engine";
import { Event } from "./modules/event";
import { Backend } from "./modules/backend";
import { Format } from "./modules/format";
import { Client } from "./modules/interface/Client";
import { Channel } from "./modules/interface/Channel";
export declare class Sinusbot {
    config: Record<string, any>;
    script: string;
    context: Record<string, any>;
    engine: Engine;
    backend: Backend;
    event: Event;
    format: Format;
    static createClient(): Client;
    static createChannel(): Channel;
    /**
     * sets the current config which will be given to the registerPlugin
     * @param config the config to pass to the registerPlugin function
     */
    setConfig(config?: Record<string, any>): this;
    /**
     * sets the script which should get executed
     * @param script sets the current script to run
     */
    setScript(script: string): this;
    /**
     * adds data to the context
     * @param context context data to add to the globals
     */
    addToContext(context: Record<string, any>): this;
    /**
     * retrieves the current context
     */
    getContext(): Record<string, any>;
    /**
     * Prepares the global variables for use
     */
    private prepareContext;
    /**
     * retrieve used modules
     */
    private getModules;
    /**
     * runs the current script
     * @returns the exported values from the script
     */
    run(): any;
}
export declare namespace Sinusbot {
    interface ModuleInterface {
        backend: Backend;
        event: Event;
        engine: Engine;
        format: Format;
    }
}
