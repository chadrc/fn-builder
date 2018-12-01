import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import valueOf from "../valueOf";
import {FunctionType} from "../functions/valueOf";

interface TestFn {
    valueOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.valueOf(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("valueOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            valueOf: valueOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
