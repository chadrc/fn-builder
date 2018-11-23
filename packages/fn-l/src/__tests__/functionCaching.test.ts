import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";
import {Cacheable} from "../types";

describe(`Function Caching`, () => {
    it(`Function caching is off by default`, () => {
        const fn = Fn.make(new TestFn());

        const fn1 = fn.sum;
        const fn2 = fn.sum;

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions references of same methods with no arguments are equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.sum;
        const fn2 = fn.sum;

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take the same arguments are equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.add(3);
        const fn2 = fn.add(3);

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take different arguments are not equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.add(3);
        const fn2 = fn.add(2);

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions that take different arguments don't override each other in cache`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.add(3);
        const fn2 = fn.add(2);
        const fn3 = fn.add(3);

        expect(fn1).to.not.equal(fn2);
        expect(fn1).to.equal(fn3);
        expect(fn2).to.not.equal(fn3);
    });

    it(`Functions chained the same way are equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.valuesInRange(4,12).sum.mul(3).add3;
        const fn2 = fn.valuesInRange(4,12).sum.mul(3).add3;

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take a different function are not equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.map((num) => num + 1);
        const fn2 = fn.map((num) => num + 1);

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions that take a constant function are equal`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const f = (num: number) => num + 1;

        const fn1 = fn.map(f);
        const fn2 = fn.map(f);

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take a constant function do override each other in cache`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        // Use same implementation because entire function is converted to string
        const f = (num: number) => num + 1;
        const f2 = (num: number) => num + 1;

        const fn1 = fn.map(f);
        const fn2 = fn.map(f2); // overrides fn1 because f and f2 toString result in same value
        const fn3 = fn.map(f);
        const fn4 = fn.map(f2);

        expect(fn1).to.not.equal(fn3);
        expect(fn2).to.not.equal(fn4);
    });

    it(`Functions that take objects are not equal with inline objects`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const fn1 = fn.context({
            value: "Value"
        });

        const fn2 = fn.context({
            value: "Value"
        });

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions that take objects are equal with constant object`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const obj = {
            value: "Value"
        };

        const fn1 = fn.context(obj);
        const fn2 = fn.context(obj);

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take objects override each other in cache`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const obj1 = {
            value: "Value"
        };

        const obj2 = {
            value: "Value 2"
        };

        const fn1 = fn.context(obj1);
        const fn2 = fn.context(obj2);
        const fn3 = fn.context(obj1);
        const fn4 = fn.context(obj2);

        expect(fn1).to.not.equal(fn3);
        expect(fn2).to.not.equal(fn4);
    });

    it(`Functions that override fnCacheString don't override each other`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        // Use same implementation because entire function is converted to string
        const f = (num: number) => num + 1;
        (f as unknown as Cacheable).fnCacheString = () => "func1";

        const f2 = (num: number) => num + 1;
        (f as unknown as Cacheable).fnCacheString = "func2";

        const fn1 = fn.map(f);
        const fn2 = fn.map(f2); // won't override fn1 because they have different cache keys
        const fn3 = fn.map(f);
        const fn4 = fn.map(f2);

        expect(fn1).to.equal(fn3);
        expect(fn2).to.equal(fn4);
    });

    it(`Objects that override fnCacheString don't override each other`, () => {
        const fn = Fn.make(new TestFn(), {
            caching: true
        });

        const obj1 = {
            value: "Value",
            get fnCacheString() {
                return "obj1";
            }
        };

        const obj2 = {
            value: "Value 2",
            fnCacheString: () => "obj2"
        };

        const fn1 = fn.context(obj1);
        const fn2 = fn.context(obj2);
        const fn3 = fn.context(obj1);
        const fn4 = fn.context(obj2);

        expect(fn1).to.equal(fn3);
        expect(fn2).to.equal(fn4);
    });
});