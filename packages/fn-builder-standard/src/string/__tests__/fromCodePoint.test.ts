import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import fromCodePoint from "../fromCodePoint";
import {FunctionType} from "../functions/fromCodePoint";

interface TestFn {
    fromCodePoint: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.fromCodePoint.fn;
    expect(func1(9731, 9733, 9842, 0x2F804)).to.equal("☃★♲你");
    expect(func1([9731, 9733, 9842, 0x2F804])).to.equal("☃★♲你");
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            fromCodePoint: fromCodePoint
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
