import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyNames from "../getOwnPropertyNames";
import {FunctionType} from "../functions/getOwnPropertyNames";

interface TestFn {
    getOwnPropertyNames: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getOwnPropertyNames(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getOwnPropertyNames", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyNames: getOwnPropertyNames
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
