import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import parseFloat from "../parseFloat";
import {FunctionType} from "../functions/parseFloat";

interface TestFn {
    parseFloat: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.parseFloat.fn;
    expect(func1("15.23")).to.equal(15.23);
};

describe("parseFloat", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            parseFloat: parseFloat
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
