## [3.0.5](https://github.com/Alorel/typescript-proto-decorator/compare/3.0.4...3.0.5) (2022-02-04)


### Bug Fixes

* **ci:** Move to github actions ([](https://github.com/Alorel/typescript-proto-decorator/commit/a8ae688))


### Maintenance

* Update dependencies ([](https://github.com/Alorel/typescript-proto-decorator/commit/7771769))
* Update license year ([](https://github.com/Alorel/typescript-proto-decorator/commit/347a67a))


### Performance Improvements

* Don't define prop on prototype twice ([](https://github.com/Alorel/typescript-proto-decorator/commit/2ce6364))


### Tests

* Refactor to avoid describe.skip ([](https://github.com/Alorel/typescript-proto-decorator/commit/43e5784))

## [3.0.4](https://github.com/Alorel/typescript-proto-decorator/compare/3.0.3...3.0.4) (2019-03-03)


### Bug Fixes

* ensure both initialise and initialiser properties are present when using the new decorators proposal ([5b0d911](https://github.com/Alorel/typescript-proto-decorator/commit/5b0d911))

## [3.0.3](https://github.com/Alorel/typescript-proto-decorator/compare/3.0.2...3.0.3) (2019-03-02)


### Bug Fixes

* Stricter legacy vs proposed decorator checking ([a8f9a11](https://github.com/Alorel/typescript-proto-decorator/commit/a8f9a11))


### Tests

* Test typescript decorator ([edbf972](https://github.com/Alorel/typescript-proto-decorator/commit/edbf972))

## [3.0.2](https://github.com/Alorel/typescript-proto-decorator/compare/3.0.1...3.0.2) (2019-02-28)


### Bug Fixes

* The decorator is now un-frozen ([5dd40ae](https://github.com/Alorel/typescript-proto-decorator/commit/5dd40ae))


### Documentation

* Add coverage & NPM badges ([b90bbc0](https://github.com/Alorel/typescript-proto-decorator/commit/b90bbc0))


### Tests

* Unify tests, add proposal-only tests, added coverage support ([4ace61d](https://github.com/Alorel/typescript-proto-decorator/commit/4ace61d))

## [3.0.1](https://github.com/Alorel/typescript-proto-decorator/compare/3.0.0...3.0.1) (2019-02-28)


### Documentation

* Update compatibility ([796e57f](https://github.com/Alorel/typescript-proto-decorator/commit/796e57f))


### Maintenance

* Clean up dist package ([2e14731](https://github.com/Alorel/typescript-proto-decorator/commit/2e14731))


### Tests

* Test prototype property ([04888af](https://github.com/Alorel/typescript-proto-decorator/commit/04888af))
* Test setting the property on a static field ([c7e34bd](https://github.com/Alorel/typescript-proto-decorator/commit/c7e34bd))

# [3.0.0](https://github.com/Alorel/typescript-proto-decorator/compare/2.1.0...3.0.0) (2019-02-27)


### Features

* Babel support (legacy and current proposal) ([bb504a3](https://github.com/Alorel/typescript-proto-decorator/commit/bb504a3)), closes [#21](https://github.com/Alorel/typescript-proto-decorator/issues/21) [#18](https://github.com/Alorel/typescript-proto-decorator/issues/18)


### BREAKING CHANGES

* Package renamed to proto-decorator

# [2.1.0](https://github.com/Alorel/typescript-proto-decorator/compare/2.0.2...2.1.0) (2018-11-05)


### Features

* Proto.hidden, Proto.immutable & Proto.immutableHidden decorators ([586e8f7](https://github.com/Alorel/typescript-proto-decorator/commit/586e8f7))

## [2.0.2](https://github.com/Alorel/typescript-proto-decorator/compare/2.0.1...2.0.2) (2018-08-20)


### Bug Fixes

* **package:** Add mode detailed file paths ([352626c](https://github.com/Alorel/typescript-proto-decorator/commit/352626c))


### Dependency updates

* Update ts-node to the latest version 🚀 (#8) ([a30e509](https://github.com/Alorel/typescript-proto-decorator/commit/a30e509)), closes [#8](https://github.com/Alorel/typescript-proto-decorator/issues/8)
* Update webpack-cli to the latest version 🚀 (#7) ([43e6ca1](https://github.com/Alorel/typescript-proto-decorator/commit/43e6ca1)), closes [#7](https://github.com/Alorel/typescript-proto-decorator/issues/7)


### Refactoring

* Return arrow function in the decorator ([a07f96f](https://github.com/Alorel/typescript-proto-decorator/commit/a07f96f))

# 2.0.1 (2018-05-14)

- **[build]** The library is now packaged in UMD in addition to es5, esm5 and esm2015.

# 2.0.0 (2018-03-29)

- **[feat]** It's now possible to make properties writable
- **[breaking]** Signature changed - the 2nd parameter is now a PropertyDescriptor partial.
