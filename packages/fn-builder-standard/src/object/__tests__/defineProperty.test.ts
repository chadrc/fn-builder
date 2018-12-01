import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defineProperty from "../defineProperty";
import {FunctionType} from "../functions/defineProperty";

interface TestFn {
    defineProperty: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.defineProperty(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
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
