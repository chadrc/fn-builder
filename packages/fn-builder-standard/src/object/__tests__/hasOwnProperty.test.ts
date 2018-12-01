
import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import hasOwnPropety from "../hasOwnPropety";
import {FunctionType} from "../functions/hasOwnPropety";

interface TestFn {
    hasOwnPropety: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.hasOwnPropety(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("hasOwnPropety", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            hasOwnPropety: hasOwnPropety
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
