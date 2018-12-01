import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import values from "../values";
import {FunctionType} from "../functions/values";

interface TestFn {
    values: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.values(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("values", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            values: values
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
