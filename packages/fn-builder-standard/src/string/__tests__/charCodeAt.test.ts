import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import charCodeAt from "../charCodeAt";
import {FunctionType} from "../functions/charCodeAt";

interface TestFn {
    charCodeAt: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.charCodeAt(10).fn;
    expect(func1("The quick brown fox jumped over the lazy dog.")).to.equal(98);
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            charCodeAt: charCodeAt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
