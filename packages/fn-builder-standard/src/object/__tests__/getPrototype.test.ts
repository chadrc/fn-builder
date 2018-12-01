import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getPrototype from "../getPrototype";
import {FunctionType} from "../functions/getPrototype";

interface TestFn {
    getPrototype: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getPrototype(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getPrototype", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getPrototype: getPrototype
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
