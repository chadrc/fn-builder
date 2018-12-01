import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stringify from "../stringify";
import {FunctionType} from "../functions/stringify";

interface TestFn {
    stringify: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.stringify().fn;

    expect(func1({value1: "value1", value2: 453})).to.equal(`{"value1":"value1","value2":453}`);
};

describe("stringify", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stringify: stringify
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
