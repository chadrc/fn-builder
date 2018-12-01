import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import seal from "../seal";
import {FunctionType} from "../functions/seal";

interface TestFn {
    seal: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};
    const func1 = fn.seal.fn;
    const result = func1(obj);
    expect(Object.isSealed(result)).to.deep.equal(true);
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
