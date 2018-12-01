import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defineProperty from "../defineProperty";
import {FunctionType} from "../functions/defineProperty";

interface TestFn {
    defineProperty: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const property = {
        value: (num1: number, num2: number) => num1 + num2
    };

    const obj = {};
    const expected = Object.defineProperty(obj, "addNumbers", property);

    const func1 = fn.defineProperty("addNumbers", property).fn;
    expect(func1({})).to.deep.equal(expected);
};

describe("defineProperty", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defineProperty: defineProperty
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
