type Options = Pick<PropertyDescriptor, 'configurable' | 'enumerable' | 'writable'>;

interface NewDescriptor<T = any> extends Options {
  descriptor?: Options;

  readonly key: PropertyKey;

  readonly kind: string;

  placement: string;

  initializer(): T;
}

function decorateLegacy(target: any, prop: PropertyKey, value: any, options?: Options): void {
  Object.defineProperty(target, prop, Object.assign(
    {configurable: true, enumerable: true, writable: true},
    options,
    {value}
  ));
}

function decorateNew(desc: NewDescriptor, value: any, options?: Options): NewDescriptor {
  if (desc.kind !== 'field') {
    throw new Error('@Proto can only decorate instance fields');
  }
  const newDescriptor = Object.assign({}, desc);

  // Babel sets the descriptor in its own property, but the spec has descriptor fields in the object root.
  Object.assign(newDescriptor.descriptor || newDescriptor, options);
  newDescriptor.initializer = () => value;

  // Leave static fields alone, set instance fields on the prototype
  if (newDescriptor.placement === 'own') {
    newDescriptor.placement = 'prototype';
  }

  return newDescriptor;
}

/**
 * Sets a value on the class' prototype
 * @param value The value to set
 * @param options Options to set. Defaults to configurable, enumerable and writable.
 */
export function Proto(value: any, options?: Options): PropertyDecorator {
  return (target: any, propertyKey: PropertyKey): void | NewDescriptor => {
    if (propertyKey) {
      decorateLegacy(target, propertyKey, value, options);
    } else {
      return decorateNew(target, value, options);
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
