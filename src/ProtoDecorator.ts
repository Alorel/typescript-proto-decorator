type Options = Pick<PropertyDescriptor, 'configurable' | 'enumerable' | 'writable'>;

interface NewDescriptor<T = any> extends Options {
  descriptor?: Options;

  readonly key: PropertyKey;

  readonly kind: string;

  readonly placement: string;

  initializer(): T;
}

function decorateLegacy(target: any, prop: PropertyKey, value: any, options?: Options): void {
  Object.defineProperty(target, prop, Object.assign(
    {configurable: true, enumerable: true, writable: true},
    options,
    {value}
  ));
}

function decorateNew(desc: NewDescriptor, value: any, options?: Options): void {
  if (desc.kind !== 'field') {
    throw new Error('@Proto can only decorate instance fields');
  }
  // Babel sets the descriptor in its own property, but the spec has descriptor fields in the object root.
  Object.assign(desc.descriptor || desc, options);
  desc.initializer = () => value;
}

/**
 * Sets a value on the class' prototype
 * @param value The value to set
 * @param options Options to set. Defaults to configurable, enumerable and writable.
 */
export function Proto(value: any, options?: Options): PropertyDecorator {
  return (target: any, propertyKey: PropertyKey): void => {
    if (propertyKey) {
      decorateLegacy(target, propertyKey, value, options);
    } else {
      decorateNew(target, value, options);
    }
  };
}

Proto.hidden = function (value: any): PropertyDecorator {
  return Proto(value, {enumerable: false});
};
Proto.immutable = function (value: any): PropertyDecorator {
  return Proto(value, {writable: false, configurable: false});
};
Proto.immutableHidden = function (value: any): PropertyDecorator {
  return Proto(value, {writable: false, configurable: false, enumerable: false});
};
