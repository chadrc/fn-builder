import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";

describe(`Naming of functions`, () => {
    it(`Can extract function name`, () => {
        const fn = Fn.from(new TestFn());

        const sumName = Fn.nameOf(fn.sum);

        expect(sumName).to.equal("sum(__input__)");
    });

    it(`Name of composed function includes variable type`, () => {
        const fn = Fn.from(new TestFn());

        const addName = Fn.nameOf(fn.add(4));

        expect(addName).to.equal("add(number)(__input__)");
    });

    it(`Name of composed function includes variable types of all calls`, () => {
        const fn = Fn.from(new TestFn());

        const precisionDivName = Fn.nameOf(fn.precisionDiv(2)(10));

        expect(precisionDivName).to.equal("precisionDiv(number)(number)(__input__)");
    });

    it(`Name of function with multiple parameters displays all of them`, () => {
        const fn = Fn.from(new TestFn());

        const valuesInRangeName = Fn.nameOf(fn.valuesInRange(3, 8));

        expect(valuesInRangeName).to.equal("valuesInRange(number,number)(__input__)");
    });

    it(`Name of function chain contains all links`, () => {
        const fn = Fn.from(new TestFn());

        const sumIncName = Fn.nameOf(fn.sum.inc);

        expect(sumIncName).to.equal("inc(sum(__input__))");
    });

    it(`Name of function chain with multiple functions arguments`, () => {
        const fn = Fn.from(new TestFn());

        const mulIncName = Fn.nameOf(fn.mul(4).inc);

        expect(mulIncName).to.equal("inc(mul(number)(__input__))");
    });

    it(`Name of function chain with multiple functions with arguments`, () => {
        const fn = Fn.from(new TestFn());

        const mulIncAddName = Fn.nameOf(fn.mul(4).inc.add(3));

        expect(mulIncAddName).to.equal("add(number)(inc(mul(number)(__input__)))");
    });

    it(`Fn option to use raw variable value when getting name`, () => {
        const fn = Fn.from(new TestFn(), {
            useArgValuesInName: true,
        });

        const mulIncAddName = Fn.nameOf(fn.mul(4).inc.add(3));

        expect(mulIncAddName).to.equal("add(3)(inc(mul(4)(__input__)))");
    });
});