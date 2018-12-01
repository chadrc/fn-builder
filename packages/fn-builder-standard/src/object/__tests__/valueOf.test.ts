import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import valueOf from "../valueOf";
import {FunctionType} from "../functions/valueOf";

interface TestFn {
    objValueOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = "string";

    const func1 = fn.objValueOf.fn;

    expect(func1(obj)).to.deep.equal(obj.valueOf());
};

describe("valueOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            objValueOf: valueOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
