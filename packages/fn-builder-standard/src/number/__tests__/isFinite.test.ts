import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isFinite from "../isFinite";
import {FunctionType} from "../functions/isFinite";

interface TestFn {
    isFinite: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isFinite.fn;
    expect(func1(10)).to.equal(true);
};

describe("isFinite", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isFinite: isFinite
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
