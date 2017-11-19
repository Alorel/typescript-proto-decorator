export function Proto(value: any, configurable = true, enumerable = true): (target: any, prop: string) => void {
  return function(target: any, propertyKey: string) {
    Object.defineProperty(target.constructor.prototype, propertyKey, {
      configurable,
      enumerable,
      value
    });
  };
}
