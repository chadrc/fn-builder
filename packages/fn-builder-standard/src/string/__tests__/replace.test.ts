import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import replace from "../replace";
import {FunctionType} from "../functions/replace";

interface TestFn {
    replace: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.replace("World", "Universe").fn;

    expect(func1("Hello, World")).to.equal("Hello, Universe");

    const func2 = fn.replace(/o/g, (match) => match.toUpperCase()).fn;

    expect(func2("Hello, World")).to.equal("HellO, WOrld");
};

describe("replace", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            replace: replace
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
