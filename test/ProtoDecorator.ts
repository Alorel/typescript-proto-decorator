import {expect} from 'chai';
import {Proto} from '../src/ProtoDecorator';

//tslint:disable:max-classes-per-file no-duplicate-string
interface Spec {
  conf: boolean;

  decorator: any;

  enum: boolean;

  name: string;

  opts?: Pick<PropertyDescriptor, 'configurable' | 'enumerable' | 'writable'>;

  write: boolean;
}

interface Obj {
  prop: string;
}

const specs: Spec[] = [
  {
    conf: true,
    decorator: Proto,
    enum: true,
    name: 'Default settings',
    write: true
  },
  {
    conf: true,
    decorator: Proto.hidden,
    enum: false,
    name: 'Hidden',
    write: true
  },
  {
    conf: false,
    decorator: Proto.immutable,
    enum: true,
    name: 'Immutable',
    write: false
  },
  {
    conf: false,
    decorator: Proto.immutableHidden,
    enum: false,
    name: 'Immutable hidden',
    write: false
  },
  {
    conf: false,
    decorator: Proto,
    enum: false,
    name: 'Overridden settings',
    opts: {
      configurable: false,
      enumerable: false,
      writable: false
    },
    write: false
  }
];

describe('ProtoDecorator', () => {
  for (const spec of specs) {
    describe(spec.name, () => {
      let obj: Obj;
      let desc: PropertyDescriptor;

      before('Init object', () => {
        class C {
          @spec.decorator('foo', spec.opts)
          public prop: string;
        }

        obj = new C();
        desc = Object.getOwnPropertyDescriptor(C.prototype, 'prop');
      });

      it('Value should be foo', () => {
        expect(obj.prop).to.eq('foo');
      });

      it(`Configurable should be ${spec.conf.toString()}`, () => {
        expect(desc.configurable).to.eq(spec.conf);
      });

      it(`Enumerable should be ${spec.enum.toString()}`, () => {
        expect(desc.enumerable).to.eq(spec.enum);
      });

      it(`Writable should be ${spec.write.toString()}`, () => {
        expect(desc.writable).to.eq(spec.write);
      });
    });
  }
});
