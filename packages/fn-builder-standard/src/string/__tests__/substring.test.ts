import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import substring from "../substring";
import {FunctionType} from "../functions/substring";

interface TestFn {
    substring: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.substring(7).fn;

    expect(func1("Hello, World")).to.equal("World");

    const func2 = fn.substring(0, 7).fn;

    expect(func2("Hello, World")).to.equal("Hello, ");
};

describe("substring", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            substring: substring
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
