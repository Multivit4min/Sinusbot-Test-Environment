export default class Backend {
    buildModule(): {
        getClientByName(name: string): never;
        chat(message: string): void;
    };
}
