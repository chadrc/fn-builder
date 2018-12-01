import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import entries from "../entries";
import {FunctionType} from "../functions/entries";

interface TestFn {
    entries: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.entries(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("entries", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            entries: entries
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
