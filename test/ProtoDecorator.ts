import {expect} from 'chai';
import {Proto} from '../src/ProtoDecorator';

//tslint:disable:max-classes-per-file
describe('ProtoDecorator', () => {
  interface Obj {
    prop: string;
  }

  describe('Default settings', () => {
    let obj: Obj;
    let desc: PropertyDescriptor;

    before('init obj', () => {
      class C {
        @Proto('foo')
        public prop: string;
      }

      obj = new C();

      desc = Object.getOwnPropertyDescriptor(C.prototype, 'prop');
    });

    it('Value should be foo', () => {
      expect(obj.prop).to.eq('foo');
    });

    it('Should be configurable', () => {
      expect(desc.configurable).to.eq(true);
    });

    it('Should be enumerable', () => {
      expect(desc.enumerable).to.eq(true);
    });

    it('Should be writable', () => {
      obj.prop = 'bar';
      expect(obj.prop).to.eq('bar');
    });
  });

  describe('Overridden settings', () => {
    let obj: Obj;
    let desc: PropertyDescriptor;

    before('init obj', () => {
      class C {
        @Proto('foo', {
          configurable: false,
          enumerable: false,
          writable: false
        })
        public prop: string;
      }

      obj = new C();

      desc = Object.getOwnPropertyDescriptor(C.prototype, 'prop');
    });

    it('Value should be foo', () => {
      expect(obj.prop).to.eq('foo');
    });

    it('Should not be configurable', () => {
      expect(desc.configurable).to.eq(false);
    });

    it('Should not be enumerable', () => {
      expect(desc.enumerable).to.eq(false);
    });

    it('Should not be writable', () => {
      expect(() => obj.prop = 'bar').to.throw();
    });
  });
});
