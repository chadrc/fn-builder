import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import exec from "../exec";
import {FunctionType} from "../functions/exec";

interface TestFn {
    exec: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.exec(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("exec", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            exec: exec
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
