import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lastIndexOf from "../lastIndexOf";
import {FunctionType} from "../functions/lastIndexOf";

interface TestFn {
    lastIndexOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = "The quick brown fox jumped over the lazy dog.";

    const func1 = fn.lastIndexOf("o").fn;
    expect(func1(input)).to.equal(42);

    const func2 = fn.lastIndexOf("q", 2).fn;
    expect(func2(input)).to.equal(-1);
};

describe("lastIndexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lastIndexOf: lastIndexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
