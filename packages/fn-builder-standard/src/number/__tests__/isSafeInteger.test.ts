import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isSafeInteger from "../isSafeInteger";
import {FunctionType} from "../functions/isSafeInteger";

interface TestFn {
    isSafeInteger: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isSafeInteger.fn;
    expect(func1(10)).to.equal(true);
};

describe("isSafeInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isSafeInteger: isSafeInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
