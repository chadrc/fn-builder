import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import seal from "../seal";
import {FunctionType} from "../functions/seal";

interface TestFn {
    seal: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.seal(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("seal", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            seal: seal
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
