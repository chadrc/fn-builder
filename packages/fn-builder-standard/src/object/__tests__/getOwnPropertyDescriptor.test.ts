import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertyDescriptor from "../getOwnPropertyDescriptor";
import {FunctionType} from "../functions/getOwnPropertyDescriptor";

interface TestFn {
    getOwnPropertyDescriptor: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getOwnPropertyDescriptor(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getOwnPropertyDescriptor", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertyDescriptor: getOwnPropertyDescriptor
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
