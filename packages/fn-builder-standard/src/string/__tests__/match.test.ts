import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import match from "../match";
import {FunctionType} from "../functions/match";

interface TestFn {
    match: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = "The quick brown fox jumped over the lazy dog.";

    const func1 = fn.match(/o./g).fn;
    expect(func1(input)).to.deep.equal(["ow", "ox", "ov", "og"]);
};

describe("match", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            match: match
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
