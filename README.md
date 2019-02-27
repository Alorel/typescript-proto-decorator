# Proto Decorator

A decorator for setting a property on the class prototype.

[![Build Status](https://travis-ci.org/Alorel/typescript-proto-decorator.png?branch=3.0.0)](https://travis-ci.org/Alorel/typescript-proto-decorator)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/typescript-proto-decorator.svg)](https://greenkeeper.io/)

# Compatibility

- Typescript - full
- Babel (current proposal) - full
- Babel (legacy) - the property will be set on class instantiation, but not the prototype.

# Installation

```sh
npm install proto-decorator
```

# API

```typescript
/**
 * Sets a value on the class' prototype
 * @param value The value to set
 * @param options Options to set. Defaults to configurable, enumerable and writable.
 */
function Proto(value: any, options?: Pick<PropertyDescriptor, 'configurable' | 'enumerable' | 'writable'>): PropertyDecorator;
```

# Usage

```typescript
import {Proto} from 'proto-decorator';

class MyClass {
  
  // set MyClass.prototype.foo = 'bar'
  @Proto('bar')
  public foo: string;
  
  // set MyClass.prototype.count = 1; It will be non-enumerable, non-writable.
  @Proto(1, {writable: false, enumerable: false})
  public readonly count: number;
}
```

# Shortcuts

- You can use `@Proto.immutable` as a shortcut for `{configurable: false, enumerable: true, writable: false}`.
- You can use `@Proto.hidden` as a shortcut for `{configurable: true, enumerable: false, writable: true}`.
- You can use `@Proto.immutableHidden` as a shortcut for `{configurable: false, enumerable: false, writable: false}`.

The UMD global is `ProtoDecorator`.
