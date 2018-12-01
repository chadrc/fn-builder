import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import test from "../test";
import {FunctionType} from "../functions/test";

interface TestFn {
    test: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.test(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(true);
};

describe("test", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            test: test
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
