import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toExponential from "../toExponential";
import {FunctionType} from "../functions/toExponential";

interface TestFn {
    toExponential: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toExponential(2).fn;
    expect(func1(123456)).to.equal("1.23e+5");
};

describe("toExponential", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toExponential: toExponential
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
