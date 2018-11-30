import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import padStart from "../padStart";
import {FunctionType} from "../functions/padStart";

interface TestFn {
    padStart: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.padStart(10, "+").fn;

    expect(func1("c")).to.equal("+++++++++c");
};

describe("padStart", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            padStart: padStart
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
