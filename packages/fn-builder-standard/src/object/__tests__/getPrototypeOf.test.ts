import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getPrototypeOf from "../getPrototypeOf";
import {FunctionType} from "../functions/getPrototypeOf";

interface TestFn {
    getPrototypeOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};

    const func1 = fn.getPrototypeOf.fn;

    const expected = Object.getPrototypeOf(obj);

    expect(func1(obj)).to.deep.equal(expected);
};

describe("getPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getPrototypeOf: getPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
