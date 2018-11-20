import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';

describe(`Interface tests`, () => {
    it(`Can create Fn instance`, () => {
        Fn.make();
    });

    it(`Can create Fn with object`, () => {
        Fn.make({
            add: (num: number) => (value: number) => value + num
        });
    });

    it(`Can compose two functions`, () => {
        class MathFn2 {
            add = (num: number) => (value: number) => value + num;
            mul = (num: number) => (value: number) => value * num;

            add3 = this.add(3);
            mul2 = this.mul(2);
        }

        const fn = Fn.make(new MathFn2());

        const add3_mul2 = fn.add3.mul2;

        expect(add3_mul2(4)).to.equal(14);
    });
});
