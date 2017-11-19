/**
 * Sets a value on the class' prototype
 * @param value The value to set
 * @param configurable Whether the value should be configurable
 * @param enumerable Whether the value should be enumerable
 * @return {(target: any, prop: string) => void}
 */
export function Proto(value: any, configurable = true, enumerable = true): (target: any, prop: string) => void {
  return function(target: any, propertyKey: string) {
    Object.defineProperty(target.constructor.prototype, propertyKey, {
      configurable,
      enumerable,
      value
    });
  };
}
