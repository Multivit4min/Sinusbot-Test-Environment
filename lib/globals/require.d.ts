/**
 * configures the global module context and sets the allowed modules
 * @param modules
 * @param throwNotFound throw an error if a module has not been found
 */
export declare function configure(modules: Record<string, object>, throwNotFound?: boolean): (mod: string) => object;
