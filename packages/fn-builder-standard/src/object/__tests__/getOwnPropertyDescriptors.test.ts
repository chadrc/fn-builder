import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyDescriptors from "../getOwnPropertyDescriptors";
import {FunctionType} from "../functions/getOwnPropertyDescriptors";

interface TestFn {
    getOwnPropertyDescriptors: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getOwnPropertyDescriptors(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getOwnPropertyDescriptors", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyDescriptors: getOwnPropertyDescriptors
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
