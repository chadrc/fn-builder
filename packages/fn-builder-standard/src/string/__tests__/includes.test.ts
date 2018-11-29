import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import includes from "../includes";
import {FunctionType} from "../functions/includes";

interface TestFn {
    includes: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = "The quick brown fox jumped over the lazy dog.";

    const func1 = fn.includes("fox").fn;
    expect(func1(input)).to.equal(true);

    const func2 = fn.includes("fox", 25).fn;
    expect(func2(input)).to.equal(false);
};

describe("includes", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            includes: includes
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
