import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {MathFn} from "./MathFn";

describe(`Function Caching`, () => {
    it(`Can extract function name`, () => {
        const fn = Fn.make(new MathFn());

        const sumName = Fn.nameOf(fn.sum);

        expect(sumName).to.equal("sum()");
    });

    it(`Two function chains with same methods with no arguments are equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.sum.inc;
        const fn2 = fn.sum.inc;

        expect(fn1).to.equal(fn2);
    });
});