import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyDescriptor from "../getOwnPropertyDescriptor";
import {FunctionType} from "../functions/getOwnPropertyDescriptor";

interface TestFn {
    getOwnPropertyDescriptor: FunctionType
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

    const func1 = fn.getOwnPropertyDescriptor("addNumbers").fn;

    const expected = Object.getOwnPropertyDescriptor(obj, "addNumbers");

    expect(func1(obj)).to.deep.equal(expected);
};

describe("getOwnPropertyDescriptor", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyDescriptor: getOwnPropertyDescriptor
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
