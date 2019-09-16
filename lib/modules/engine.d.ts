export default class Engine {
    backend: string;
    commandprefix: string;
    /**
     * @param backend the backend which should be retrieved
     */
    setBackend(backend: string): this;
    /**
     * sets a new command prefix
     * @param prefix
     */
    setCommandPrefix(prefix: string): this;
    /**
     * gets the module object
     */
    buildModule(): {
        getBackend(): string;
        getCommandPrefix(): string;
    };
}
