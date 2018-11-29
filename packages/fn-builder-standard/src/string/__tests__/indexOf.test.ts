import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import indexOf from "../indexOf";
import {FunctionType} from "../functions/indexOf";

interface TestFn {
    indexOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = "The quick brown fox jumped over the lazy dog.";

    const func1 = fn.indexOf("fox").fn;
    expect(func1(input)).to.equal(16);

    const func2 = fn.indexOf("fox", 25).fn;
    expect(func2(input)).to.equal(-1);
};

describe("indexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            indexOf: indexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
