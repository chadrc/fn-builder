import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyNames from "../getOwnPropertyNames";
import {FunctionType} from "../functions/getOwnPropertyNames";

interface TestFn {
    getOwnPropertyNames: FunctionType
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

    const func1 = fn.getOwnPropertyNames.fn;

    expect(func1(obj)).to.deep.equal(["addNumbers", "subNumbers"]);
};

describe("getOwnPropertyNames", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyNames: getOwnPropertyNames
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
