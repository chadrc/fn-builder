import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import values from "../values";
import {FunctionType} from "../functions/values";

interface TestFn {
    values: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {
        value1: "value",
        value2: 800,
        value3: false
    };

    const func1 = fn.values.fn;
    expect(func1(obj)).to.deep.equal(["value", 800, false]);
};

describe("values", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            values: values
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
