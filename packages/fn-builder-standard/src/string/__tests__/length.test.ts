import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import length from "../length";
import {FunctionType} from "../functions/length";

interface TestFn {
    length: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.length.fn;
    expect(func1("Hello World!")).to.equal(12);
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            length: length
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
