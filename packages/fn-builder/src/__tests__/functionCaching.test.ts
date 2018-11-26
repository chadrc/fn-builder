import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";
import {Cacheable} from "../types";

describe(`Caching`, () => {
    it(`Context caching is off by default`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const fn1 = fnBuilder.sum;
        const fn2 = fnBuilder.sum;

        expect(fn1).to.not.equal(fn2);
    });

    it(`Contexts references of same methods with no arguments are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.sum;
        const fn2 = fnBuilder.sum;

        expect(fn1).to.equal(fn2);
    });

    it(`Function references of same context are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.sum.fn;
        const fn2 = fnBuilder.sum.fn;

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts that take the same arguments are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.add(3);
        const fn2 = fnBuilder.add(3);

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts that take different arguments are not equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.add(3);
        const fn2 = fnBuilder.add(2);

        expect(fn1).to.not.equal(fn2);
    });

    it(`Contexts that take different arguments don't override each other in cache`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.add(3);
        const fn2 = fnBuilder.add(2);
        const fn3 = fnBuilder.add(3);

        expect(fn1).to.not.equal(fn2);
        expect(fn1).to.equal(fn3);
        expect(fn2).to.not.equal(fn3);
    });

    it(`Contexts chained the same way are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.valuesInRange(4,12).sum.mul(3).add3;
        const fn2 = fnBuilder.valuesInRange(4,12).sum.mul(3).add3;

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts chained with different arguments aren't equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.valuesInRange(4,12).sum.mul(3).add3;
        const fn2 = fnBuilder.valuesInRange(4,12).sum.mul(5).add3;

        expect(fn1).to.not.equal(fn2);
    });

    it(`Contexts that take a inline functions with same implementations are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.map((num) => num + 1);
        const fn2 = fnBuilder.map((num) => num + 1);

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts that take a constant function are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const f = (num: number) => num + 1;

        const fn1 = fnBuilder.map(f);
        const fn2 = fnBuilder.map(f);

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts with same implementation are equal`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        // Use same implementation because entire function is converted to string
        const f = (num: number) => num + 1;
        const f2 = (num: number) => num + 1;

        const fn1 = fnBuilder.map(f);
        const fn2 = fnBuilder.map(f2);

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts that take objects are equal with inline objects`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const fn1 = fnBuilder.context({
            value: "Value"
        });

        const fn2 = fnBuilder.context({
            value: "Value"
        });

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts that take objects are equal with constant object`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        const obj = {
            value: "Value"
        };

        const fn1 = fnBuilder.context(obj);
        const fn2 = fnBuilder.context(obj);

        expect(fn1).to.equal(fn2);
    });

    it(`Contexts with same implementation that override fnCacheString aren't equal to each other`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            caching: true
        });

        // Use same implementation because entire function is converted to string
        const f = (num: number) => num + 1;
        (f as unknown as Cacheable).fnCacheString = () => "func1";

        const f2 = (num: number) => num + 1;
        (f as unknown as Cacheable).fnCacheString = "func2";

        const fn1 = fnBuilder.map(f);
        const fn2 = fnBuilder.map(f2); // won't override fn1 because they have different cache keys

        expect(fn1).to.not.equal(fn2);
    });

    it(`Contexts that take objects that override fnCacheString aren't equal to each other`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
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

        const fn1 = fnBuilder.context(obj1);
        const fn2 = fnBuilder.context(obj2);

        expect(fn1).to.not.equal(fn2);
    });
});