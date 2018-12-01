import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import create from "../create";
import {FunctionType} from "../functions/create";

interface TestFn {
    create: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.create(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("create", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            create: create
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
