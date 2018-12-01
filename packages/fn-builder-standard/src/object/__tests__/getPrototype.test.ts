import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getPrototypeOf from "../getPrototypeOfOf";
import {FunctionType} from "../functions/getPrototypeOf";

interface TestFn {
    getPrototypeOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getPrototypeOf(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getPrototypeOf: getPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
