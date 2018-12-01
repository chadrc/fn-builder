import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLocaleString from "../toLocaleString";
import {FunctionType} from "../functions/toLocaleString";

interface TestFn {
    toLocaleString: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toLocaleString(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("toLocaleString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toLocaleString: toLocaleString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
