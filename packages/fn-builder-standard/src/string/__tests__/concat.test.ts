import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import concat from "../concat";
import {FunctionType} from "../functions/concat";

interface TestFn {
    concat: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.concat(["Function ", "World"]).fn;
    expect(func1("Hello ")).to.equal("Hello Function World");
};

describe("concat", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            concat: concat
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
