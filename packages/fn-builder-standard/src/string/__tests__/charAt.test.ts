import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import charAt from "../charAt";
import {FunctionType} from "../functions/charAt";

interface TestFn {
    charAt: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.charAt(10).fn;
    expect(func1("The quick brown fox jumped over the lazy dog.")).to.equal("b");
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            charAt: charAt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
