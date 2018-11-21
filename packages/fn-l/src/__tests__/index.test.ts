import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';

class MathFn {
    add = (num: number) => (value: number) => value + num;
    mul = (num: number) => (value: number) => value * num;

    add3 = this.add(3);
    mul2 = this.mul(2);
}

describe(`Interface tests`, () => {
    it(`Can create Fn instance`, () => {
        Fn.make({});
    });

    it(`Can create Fn with object`, () => {
        Fn.make({
            add: (num: number) => (value: number) => value + num
        });
    });

    it(`Can chain two functions`, () => {
        const fn = Fn.make(new MathFn());

        const add3_mul2 = fn.add3.mul2;

        expect(add3_mul2(4)).to.equal(14);
    });

    it(`Can create function from existing function`, () => {
        const fn = Fn.make(new MathFn());

        const add5 = fn.add(5);

        expect(add5(2)).to.equal(7);
    });

    it(`Can chain two function creations`, () => {
        const fn = Fn.make(new MathFn());

        const mul6_add2 = fn.mul(6).add(2);

        expect(mul6_add2(3)).to.equal(20);
    });
});
