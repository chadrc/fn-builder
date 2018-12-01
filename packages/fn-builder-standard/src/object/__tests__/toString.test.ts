import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toString from "../toString";
import {FunctionType} from "../functions/toString";

interface TestFn {
    toString: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toString(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("toString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toString: toString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
