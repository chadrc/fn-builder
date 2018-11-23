import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";

describe(`Interface tests`, () => {
    it(`Can create Fn instance`, () => {
        Fn.from({});
    });

    it(`Can create Fn with object`, () => {
        Fn.from({
            add: (num: number) => (value: number) => value + num
        });
    });

    it(`Can create function from existing function`, () => {
        const fn = Fn.from(new TestFn());

        const add5 = fn.add(5);

        expect(add5(2)).to.equal(7);
    });

    it(`Can chain two function creations`, () => {
        const fn = Fn.from(new TestFn());

        const mul6_add2 = fn.mul(6).add(2);

        expect(mul6_add2(3)).to.equal(20);
    });

    it(`Can use pre-composed function`, () => {
        const fn = Fn.from(new TestFn());

        const add3 = fn.add3;

        expect(add3(8)).to.equal(11);
    });

    it(`Can chain two composed functions`, () => {
        const fn = Fn.from(new TestFn());

        const add3_mul2 = fn.add3.mul2;

        expect(add3_mul2(4)).to.equal(14);
    });

    it(`Can chain composed functions with inline composed functions`, () => {
        const fn = Fn.from(new TestFn());

        const mul2_add10 = fn.mul2.add(10);

        expect(mul2_add10(8)).to.equal(26);
    });

    it(`Can pass multiple arguments to compose a function`, () => {
        const fn = Fn.from(new TestFn());

        const avgOfValuesInRange = fn.valuesInRange(5, 12).avg;

        // 8 + 10 + 12 = 30
        // 30 / 3 = 10
        expect(avgOfValuesInRange([2,8,10,12,15])).to.equal(10);
    });

    it(`Can pass multiple arguments to composed function`, () => {
        const fn = Fn.from(new TestFn());

        const addValuesMul2 = fn.addValues.mul2.add(4);

        expect(addValuesMul2(3, 4)).to.equal(18);
    });

    it(`Can chain calls to one function`, () => {
        const fn = Fn.from(new TestFn());

        const div10_2decimals = fn.precisionDiv(2)(8).mul(3);

        // 1 / 8 = .125
        // toFixed(.125) = .13
        // .13 * 3 = .39
        expect(div10_2decimals(1)).to.equal(.39);
    });

    it(`Cannot set any value on Fn object`, () => {
        const fn = Fn.from(new TestFn());

        const func = () => {
            fn.add = (() => {}) as any;
        };

        expect(func).to.throw();
    });

    it(`Cannot delete any value on Fn object`, () => {
        const fn = Fn.from(new TestFn());

        const func = () => {
            delete fn.add;
        };

        expect(func).to.throw();
    });
});
