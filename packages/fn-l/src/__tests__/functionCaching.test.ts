import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {MathFn} from "./MathFn";

describe(`Function Caching`, () => {
    it(`Functions references of same methods with no arguments are equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.sum;
        const fn2 = fn.sum;

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take the same arguments are equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.add(3);
        const fn2 = fn.add(3);

        expect(fn1).to.equal(fn2);
    });

    it(`Functions that take different arguments are not equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.add(3);
        const fn2 = fn.add(2);

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions that take different arguments don't override each other in cache`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.add(3);
        const fn2 = fn.add(2);
        const fn3 = fn.add(3);

        expect(fn1).to.not.equal(fn2);
        expect(fn1).to.equal(fn3);
        expect(fn2).to.not.equal(fn3);
    });

    it(`Functions that take a different function are not equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.map((num) => num + 1);
        const fn2 = fn.map((num) => num + 1);

        expect(fn1).to.not.equal(fn2);
    });

    it(`Functions that take a constant function are equal`, () => {
        const fn = Fn.make(new MathFn());

        const f = (num: number) => num + 1;

        const fn1 = fn.map(f);
        const fn2 = fn.map(f);

        expect(fn1).to.equal(fn2);
    });

    it(`Functions chained the same way are equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.valuesInRange(4,12).sum.mul(3).add3;
        const fn2 = fn.valuesInRange(4,12).sum.mul(3).add3;

        expect(fn1).to.equal(fn2);
    });
});