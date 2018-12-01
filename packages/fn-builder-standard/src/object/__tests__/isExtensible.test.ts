import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isExtensible from "../isExtensible";
import {FunctionType} from "../functions/isExtensible";

interface TestFn {
    isExtensible: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};
    const func1 = fn.isExtensible.fn;

    expect(func1(obj)).to.equal(true);

    Object.preventExtensions(obj);
    expect(func1(obj)).to.equal(false);
};

describe("isExtensible", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isExtensible: isExtensible
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
