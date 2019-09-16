export declare class SinusbotTest {
    config: Record<string, any>;
    script: string;
    context: Record<string, any>;
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
    private prepareGlobals;
    /**
     * retrieve used modules
     */
    private getModules;
    /** builds the engine module */
    private prepareEngine;
    /** builds the event module */
    private prepareEvent;
    /** builds the backend module */
    private prepareBackend;
    /**
     * runs the current script
     */
    run(): void;
}
