# Proto Decorator

A decorator for setting a property on the class prototype
(previously known as [typescript-proto-decorator](https://www.npmjs.com/package/typescript-proto-decorator)).

[![Build Status](https://travis-ci.org/Alorel/typescript-proto-decorator.png?branch=3.0.1)](https://travis-ci.org/Alorel/typescript-proto-decorator)
[![Coverage Status](https://coveralls.io/repos/github/Alorel/typescript-proto-decorator/badge.svg?branch=master)](https://coveralls.io/github/Alorel/typescript-proto-decorator?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/typescript-proto-decorator.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/proto-decorator.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/proto-decorator)

# Compatibility

- Typescript - full
- Spec-compliant decorator proposal - full
- Babel (current proposal) - full
- Babel (legacy) - full

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

The UMD global name is `ProtoDecorator`.
