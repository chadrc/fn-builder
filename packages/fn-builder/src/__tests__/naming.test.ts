import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import {TestFn} from "./TestFn";

describe(`Naming of functions`, () => {
    it(`Can extract function name`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const sumName = FnBuilder.nameOf(fnBuilder.sum);

        expect(sumName).to.equal("sum(__input__)");
    });

    it(`Name of composed function includes variable type`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const addName = FnBuilder.nameOf(fnBuilder.add(4));

        expect(addName).to.equal("add(number)(__input__)");
    });

    it(`Name of composed function includes variable types of all calls`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const precisionDivName = FnBuilder.nameOf(fnBuilder.precisionDiv(2)(10));

        expect(precisionDivName).to.equal("precisionDiv(number)(number)(__input__)");
    });

    it(`Name of function with multiple parameters displays all of them`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const valuesInRangeName = FnBuilder.nameOf(fnBuilder.valuesInRange(3, 8));

        expect(valuesInRangeName).to.equal("valuesInRange(number,number)(__input__)");
    });

    it(`Name of function chain contains all links`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const sumIncName = FnBuilder.nameOf(fnBuilder.sum.inc);

        expect(sumIncName).to.equal("inc(sum(__input__))");
    });

    it(`Name of function chain with multiple functions arguments`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const mulIncName = FnBuilder.nameOf(fnBuilder.mul(4).inc);

        expect(mulIncName).to.equal("inc(mul(number)(__input__))");
    });

    it(`Name of function chain with multiple functions with arguments`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const mulIncAddName = FnBuilder.nameOf(fnBuilder.mul(4).inc.add(3));

        expect(mulIncAddName).to.equal("add(number)(inc(mul(number)(__input__)))");
    });

    it(`Fn option to use raw variable value when getting name`, () => {
        const fnBuilder = FnBuilder.from(new TestFn(), {
            useArgValuesInName: true,
        });

        const mulIncAddName = FnBuilder.nameOf(fnBuilder.mul(4).inc.add(3));

        expect(mulIncAddName).to.equal("add(3)(inc(mul(4)(__input__)))");
    });

    it(`Name of function with another composed function contains its name`, () => {
        const fnBuilder = FnBuilder.from(new TestFn());

        const add5_mul3 = fnBuilder.add(5).mul(3).fn;

        const valuesInRange_map = fnBuilder.valuesInRange(10, 20).map(add5_mul3);

        const name = FnBuilder.nameOf(valuesInRange_map);

        const expectedName = "map(mul(number)(add(number)(__input__)))(valuesInRange(number,number)(__input__))";

        expect(name).to.equal(expectedName);
    });
});