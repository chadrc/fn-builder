import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {MathFn} from "./MathFn";

describe(`Function Caching`, () => {
    it(`Two function chains with same methods with no arguments are equal`, () => {
        const fn = Fn.make(new MathFn());

        const fn1 = fn.mul2.add3;
        const fn2 = fn.mul2.add3;

        expect(fn1).to.equal(fn2);
    });
});