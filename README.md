# Typescript Proto Decorator

[![Build Status](https://travis-ci.org/Alorel/typescript-proto-decorator.png?branch=master)](https://travis-ci.org/Alorel/typescript-proto-decorator)
[![Coverage Status](https://coveralls.io/repos/github/Alorel/typescript-proto-decorator/badge.svg?branch=master)](https://coveralls.io/github/Alorel/typescript-proto-decorator?branch=master)
[![Dependency status](https://david-dm.org/alorel/typescript-proto-decorator.svg)](https://david-dm.org/alorel/typescript-proto-decorator#info=dependencies&view=list)
[![Dev dependency status](https://david-dm.org/alorel/typescript-proto-decorator/dev-status.svg)](https://david-dm.org/alorel/typescript-proto-decorator#info=devDependencies&view=list)
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
 * @param configurable Whether the value should be configurable
 * @param enumerable Whether the value should be enumerable
 * @return {(target: any, prop: string) => void}
 */
function Proto(value: any, configurable = true, enumerable = true): (target: any, prop: string) => void;
```

# Usage

```typescript
import {Proto} from 'typescript-proto-decorator';

class MyClass {
  
  // set MyClass.prototype.foo = 'bar'
  @Proto('bar')
  public foo: string;
  
  // set MyClass.prototype.count = 1; It will be non-enumerable, non-configurable.
  @Proto(1, false, false)
  public readonly count: number;
}
```
