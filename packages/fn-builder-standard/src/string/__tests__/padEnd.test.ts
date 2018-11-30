import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import padEnd from "../padEnd";
import {FunctionType} from "../functions/padEnd";

interface TestFn {
    padEnd: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.padEnd(10, "+").fn;

    expect(func1("c")).to.equal("c+++++++++");
};

describe("padEnd", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            padEnd: padEnd
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
