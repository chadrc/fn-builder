import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defineProperties from "../defineProperties";
import {FunctionType} from "../functions/defineProperties";

interface TestFn {
    defineProperties: FunctionType
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

    const expected = Object.defineProperties({}, properties);

    const func1 = fn.defineProperties(properties).fn;
    expect(func1({})).to.deep.equal(expected);
};

describe("defineProperties", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defineProperties: defineProperties
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
