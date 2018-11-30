import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import search from "../search";
import {FunctionType} from "../functions/search";

interface TestFn {
    search: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.search("World").fn;

    expect(func1("Hello, World")).to.equal(7);

    const func2 = fn.search(/o/g).fn;

    expect(func2("Hello, World")).to.equal(4);
};

describe("search", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            search: search
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
