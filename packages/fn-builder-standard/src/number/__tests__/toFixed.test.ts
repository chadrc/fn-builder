import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toFixed from "../toFixed";
import {FunctionType} from "../functions/toFixed";

interface TestFn {
    toFixed: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toFixed(2).fn;
    expect(func1(1.234567)).to.equal("1.23");
};

describe("toFixed", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toFixed: toFixed
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
