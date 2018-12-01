import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import preventExtensions from "../preventExtensions";
import {FunctionType} from "../functions/preventExtensions";

interface TestFn {
    preventExtensions: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};
    const func1 = fn.preventExtensions.fn;
    const result = func1(obj);
    expect(Object.isExtensible(result)).to.deep.equal(false);
};

describe("preventExtensions", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            preventExtensions: preventExtensions
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});

