import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import slice from "../slice";
import {FunctionType} from "../functions/slice";

interface TestFn {
    slice: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.slice(7).fn;

    expect(func1("Hello, World")).to.equal("World");

    const func2 = fn.slice(0, 7).fn;

    expect(func2("Hello, World")).to.equal("Hello, ");
};

describe("slice", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            slice: slice
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
