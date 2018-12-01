import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toPrecision from "../toPrecision";
import {FunctionType} from "../functions/toPrecision";

interface TestFn {
    toPrecision: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toPrecision(4).fn;
    expect(func1(123.456)).to.equal("123.5");
};

describe("toPrecision", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toPrecision: toPrecision
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
