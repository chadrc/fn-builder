import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import propertyIsEnumerable from "../propertyIsEnumerable";
import {FunctionType} from "../functions/propertyIsEnumerable";

interface TestFn {
    propertyIsEnumerable: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.propertyIsEnumerable(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("propertyIsEnumerable", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            propertyIsEnumerable: propertyIsEnumerable
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
