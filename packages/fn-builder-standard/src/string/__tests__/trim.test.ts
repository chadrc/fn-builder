import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import trim from "../trim";
import {FunctionType} from "../functions/trim";

interface TestFn {
    trim: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.trim.fn;

    expect(func1("\n\t       Hello, World!        \n\t")).to.equal("Hello, World!");
};

describe("trim", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            trim: trim
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
