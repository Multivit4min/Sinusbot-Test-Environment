export function configure(config: Record<string, any> = {}) {
  return function registerPlugin(meta: Record<string, any>, handler: Function) {
    handler(null, config, meta)
  }
}