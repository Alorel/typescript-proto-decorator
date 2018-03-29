# Typescript Proto Decorator

[![Build Status](https://travis-ci.org/Alorel/typescript-proto-decorator.png?branch=master)](https://travis-ci.org/Alorel/typescript-proto-decorator)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alorel/typescript-proto-decorator.svg)](https://greenkeeper.io/)

# Installation

```sh
npm install typescript-proto-decorator
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
import {Proto} from 'typescript-proto-decorator';

class MyClass {
  
  // set MyClass.prototype.foo = 'bar'
  @Proto('bar')
  public foo: string;
  
  // set MyClass.prototype.count = 1; It will be non-enumerable, non-writable.
  @Proto(1, {writable: false, enumerable: false})
  public readonly count: number;
}
```
