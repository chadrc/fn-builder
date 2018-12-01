
import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isSealed from "../isSealed";
import {FunctionType} from "../functions/isSealed";

interface TestFn {
    isSealed: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isSealed(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("isSealed", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isSealed: isSealed
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
