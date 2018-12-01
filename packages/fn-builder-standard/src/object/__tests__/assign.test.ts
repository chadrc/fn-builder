import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assign from "../assign";
import {FunctionType} from "../functions/assign";

interface TestFn {
    assign: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.assign(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("assign", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assign: assign
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
