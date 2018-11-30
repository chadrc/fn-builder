import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import startsWith from "../startsWith";
import {FunctionType} from "../functions/startsWith";

interface TestFn {
    startsWith: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.startsWith("The").fn;

    expect(func1("The quick brown fox jumped over the lazy dog.")).to.equal(true);

    const func2 = fn.startsWith("The", 4).fn;

    expect(func2("The quick brown fox jumped over the lazy dog.")).to.equal(false);
};

describe("startsWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            startsWith: startsWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
