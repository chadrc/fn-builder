import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyDescriptors from "../getOwnPropertyDescriptors";
import {FunctionType} from "../functions/getOwnPropertyDescriptors";

interface TestFn {
    getOwnPropertyDescriptors: FunctionType
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

    const func1 = fn.getOwnPropertyDescriptors.fn;

    const expected = Object.getOwnPropertyDescriptors(obj);

    expect(func1(obj)).to.deep.equal(expected);
};

describe("getOwnPropertyDescriptors", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyDescriptors: getOwnPropertyDescriptors
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
