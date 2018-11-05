import {expect} from 'chai';
import {Proto} from '../src/ProtoDecorator';

//tslint:disable:max-classes-per-file no-duplicate-string
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
      expect(desc.writable).to.eq(true);
    });
  });

  describe('Hidden', () => {
    let obj: Obj;
    let desc: PropertyDescriptor;

    before('init obj', () => {
      class C {
        @Proto.hidden('foo')
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

    it('Should not be enumerable', () => {
      expect(desc.enumerable).to.eq(false);
    });

    it('Should be writable', () => {
      expect(desc.writable).to.eq(true);
    });
  });

  describe('Immutable', () => {
    let obj: Obj;
    let desc: PropertyDescriptor;

    before('init obj', () => {
      class C {
        @Proto.immutable('foo')
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

    it('Should be enumerable', () => {
      expect(desc.enumerable).to.eq(true);
    });

    it('Should not be writable', () => {
      expect(desc.writable).to.eq(false);
    });
  });

  describe('Immutable Hidden', () => {
    let obj: Obj;
    let desc: PropertyDescriptor;

    before('init obj', () => {
      class C {
        @Proto.immutableHidden('foo')
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
      expect(desc.writable).to.eq(false);
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
      expect(desc.writable).to.eq(false);
    });
  });
});
