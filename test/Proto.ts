import {GenericTestContext, test} from 'ava';
import {Proto} from '../src/ProtoDecorator';

class Foo {

  @Proto('def')
  public defaults: string;
  @Proto('b', false, true)
  public enumNoConfig: string;
  @Proto('a', true, false)
  public noEnumConfig: string;
}

const desc = {
  defaults:     Object.getOwnPropertyDescriptor(Foo.prototype, 'defaults'),
  enumNoConfig: Object.getOwnPropertyDescriptor(Foo.prototype, 'enumNoConfig'),
  noEnumConfig: Object.getOwnPropertyDescriptor(Foo.prototype, 'noEnumConfig')
};

test('Default value', (t: GenericTestContext<any>) => {
  t.is(Foo.prototype.defaults, 'def');
});

test('Default configurable', (t: GenericTestContext<any>) => {
  t.true(desc.defaults.configurable);
});

test('Default enumerable', (t: GenericTestContext<any>) => {
  t.true(desc.defaults.enumerable);
});

test('noEnumConfig value', (t: GenericTestContext<any>) => {
  t.is(Foo.prototype.noEnumConfig, 'a');
});

test('noEnumConfig configurable', (t: GenericTestContext<any>) => {
  t.true(desc.noEnumConfig.configurable);
});

test('noEnumConfig enumerable', (t: GenericTestContext<any>) => {
  t.false(desc.noEnumConfig.enumerable);
});

test('enumNoConfig value', (t: GenericTestContext<any>) => {
  t.is(Foo.prototype.enumNoConfig, 'b');
});

test('enumNoConfig configurable', (t: GenericTestContext<any>) => {
  t.false(desc.enumNoConfig.configurable);
});

test('enumNoConfig enumerable', (t: GenericTestContext<any>) => {
  t.true(desc.enumNoConfig.enumerable);
});
