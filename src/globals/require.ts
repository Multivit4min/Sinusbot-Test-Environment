/**
 * configures the global module context and sets the allowed modules
 * @param modules 
 * @param throwNotFound throw an error if a module has not been found
 */
export function configure(modules: Record<string, object>, throwNotFound: boolean = true) {
  return function require(mod: string) {
    const exists = Object.keys(modules).includes(mod)
    if (!exists && throwNotFound)
      throw new Error(`Module with name '${mod}' has not been found`)
    return modules[mod]
  }
}