import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";

describe(`Interface tests`, () => {
    it(`Can create FnBuilder instance`, () => {
        FnBuilder.from({});
    });

    it(`Can create FnBuilder with object`, () => {
        FnBuilder.from({
            add: (num: number) => (value: number) => value + num
        });
    });

    it(`Can create function from existing function`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const add5 = fnBuilder.add(5).fn;

        expect(add5(2)).to.equal(7);
    });

    it(`Can chain two function creations`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const mul6_add2 = fnBuilder.mul(6).add(2).fn;

        expect(mul6_add2(3)).to.equal(20);
    });

    it(`Can use pre-composed function`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const add3 = fnBuilder.add3.fn;

        expect(add3(8)).to.equal(11);
    });

    it(`Can chain two composed functions`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const add3_mul2 = fnBuilder.add3.mul2.fn;

        expect(add3_mul2(4)).to.equal(14);
    });

    it(`Can chain composed functions with inline composed functions`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const mul2_add10 = fnBuilder.mul2.add(10).fn;

        expect(mul2_add10(8)).to.equal(26);
    });

    it(`Can pass multiple arguments to compose a function`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const avgOfValuesInRange = fnBuilder.valuesInRange(5, 12).avg.fn;

        // 8 + 10 + 12 = 30
        // 30 / 3 = 10
        expect(avgOfValuesInRange([2,8,10,12,15])).to.equal(10);
    });

    it(`Can pass multiple arguments to composed function`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const addValuesMul2 = fnBuilder.addValues.mul2.add(4).fn;

        expect(addValuesMul2(3, 4)).to.equal(18);
    });

    it(`Can chain calls to one function`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const div10_2decimals = fnBuilder.precisionDiv(2)(8).mul(3).fn;

        // 1 / 8 = .125
        // toFixed(.125) = .13
        // .13 * 3 = .39
        expect(div10_2decimals(1)).to.equal(.39);
    });

    it(`Cannot set any value on Fn object`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const func = () => {
            fnBuilder.add = (() => {}) as any;
        };

        expect(func).to.throw();
    });

    it(`Cannot delete any value on Fn object`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const func = () => {
            delete fnBuilder.add;
        };

        expect(func).to.throw();
    });
});
