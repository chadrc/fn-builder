import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import endsWith from "../endsWith";
import {FunctionType} from "../functions/endsWith";

interface TestFn {
    endsWith: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = "The quick brown fox jumped over the lazy dog.";
    const func1 = fn.endsWith("dog.").fn;
    expect(func1(input)).to.equal(true);

    const func2 = fn.endsWith("dog.", 10).fn;
    expect(func2(input)).to.equal(false);
};

describe("endsWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            endsWith: endsWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
