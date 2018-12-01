import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isExtensible from "../isExtensible";
import {FunctionType} from "../functions/isExtensible";

interface TestFn {
    isExtensible: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isExtensible(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
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
