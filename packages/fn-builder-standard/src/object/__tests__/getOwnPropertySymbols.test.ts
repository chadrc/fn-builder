import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertySymbols from "../getOwnPropertySymbols";
import {FunctionType} from "../functions/getOwnPropertySymbols";

interface TestFn {
    getOwnPropertySymbols: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const properties = {
        addNumbers: {
            value: (num1: number, num2: number) => num1 + num2
        },
        subNumbers: {
            value: (num1: number, num2: number) => num1 - num2
        }
    };

    const obj = Object.defineProperties({}, properties);

    const func1 = fn.getOwnPropertySymbols.fn;

    const expected = Object.getOwnPropertySymbols(obj);

    expect(func1(obj)).to.deep.equal(expected);
};

describe("getOwnPropertySymbols", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertySymbols: getOwnPropertySymbols
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
