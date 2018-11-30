import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import split from "../split";
import {FunctionType} from "../functions/split";

interface TestFn {
    split: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.split(" ").fn;

    expect(func1("The quick brown fox jumped over the lazy dog.")).to.deep.equal([
        "The",
        "quick",
        "brown",
        "fox",
        "jumped",
        "over",
        "the",
        "lazy",
        "dog."
    ]);

    const func2 = fn.split(" ", 4).fn;

    expect(func2("The quick brown fox jumped over the lazy dog.")).to.deep.equal([
        "The",
        "quick",
        "brown",
        "fox"
    ]);
};

describe("split", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            split: split
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
