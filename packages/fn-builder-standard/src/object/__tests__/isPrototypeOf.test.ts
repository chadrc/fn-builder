import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isPrototypeOf from "../isPrototypeOf";
import {FunctionType} from "../functions/isPrototypeOf";

interface TestFn {
    isPrototypeOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isPrototypeOf(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("isPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isPrototypeOf: isPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
