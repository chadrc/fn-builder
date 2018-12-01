import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defineProperties from "../defineProperties";
import {FunctionType} from "../functions/defineProperties";

interface TestFn {
    defineProperties: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.defineProperties(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
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
