/**
 * Sets a value on the class' prototype
 * @param value The value to set
 * @param options Options to set. Defaults to configurable, enumerable and writable.
 */
//tslint:disable-next-line:max-line-length
export function Proto(value: any, options?: Pick<PropertyDescriptor, 'configurable' | 'enumerable' | 'writable'>): PropertyDecorator {
  return (target: any, propertyKey: string) => {
    const descriptor: PropertyDescriptor = Object.assign(
      {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      },
      options
    );

    Object.defineProperty(target.constructor.prototype, propertyKey, descriptor);
  };
}
