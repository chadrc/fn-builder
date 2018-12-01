import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import is from "../is";
import {FunctionType} from "../functions/is";

interface TestFn {
    is: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};

    const func1 = fn.is(obj).fn;

    expect(func1(obj)).to.equal(true);
};

describe("is", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            is: is
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
