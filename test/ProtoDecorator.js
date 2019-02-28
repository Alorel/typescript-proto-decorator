const {expect} = require('chai');
const {Proto} = require('../dist/es5/ProtoDecorator')

const specs = [
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
      let obj;
      let instDesc;
      let staticDesc;
      let clazz;

      before('Init object', () => {
        class C {
          @spec.decorator('bar', spec.opts)
          static staticProp;
          @spec.decorator('foo', spec.opts)
          prop;
        }

        obj = new C();
        clazz = C;
        instDesc = Object.getOwnPropertyDescriptor(C.prototype, 'prop');
        staticDesc = Object.getOwnPropertyDescriptor(C, 'staticProp');
      });

      it('Instance property should be foo', () => {
        expect(obj.prop).to.eq('foo');
      });

      it('Prototype property should be foo', () => {
        expect(clazz.prototype.prop).to.eq('foo');
      });

      it(`Instance configurable should be ${spec.conf.toString()}`, () => {
        expect(instDesc.configurable).to.eq(spec.conf);
      });

      it(`Instance enumerable should be ${spec.enum.toString()}`, () => {
        expect(instDesc.enumerable).to.eq(spec.enum);
      });

      it(`Instance writable should be ${spec.write.toString()}`, () => {
        expect(instDesc.writable).to.eq(spec.write);
      });

      it('Static property should be bar', () => {
        expect(clazz.staticProp).to.eq('bar');
      });

      it(`Static configurable should be ${spec.conf.toString()}`, () => {
        expect(staticDesc.configurable).to.eq(spec.conf);
      });

      it(`Static enumerable should be ${spec.enum.toString()}`, () => {
        expect(staticDesc.enumerable).to.eq(spec.enum);
      });

      it(`Instance writable should be ${spec.write.toString()}`, () => {
        expect(staticDesc.writable).to.eq(spec.write);
      });
    });
  }
});
