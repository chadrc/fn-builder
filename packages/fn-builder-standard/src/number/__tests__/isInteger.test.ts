import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isInteger from "../isInteger";
import {FunctionType} from "../functions/isInteger";

interface TestFn {
    isInteger: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isInteger.fn;
    expect(func1(73)).to.equal(true);
};

describe("isInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isInteger: isInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
