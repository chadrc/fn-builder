import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import codePointAt from "../codePointAt";
import {FunctionType} from "../functions/codePointAt";

interface TestFn {
    codePointAt: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.codePointAt(2).fn;
    const str = String.fromCodePoint(9731, 9733, 9842, 0x2F804);
    expect(func1(str)).to.equal(9842);
};

describe("codePointAt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            codePointAt: codePointAt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
