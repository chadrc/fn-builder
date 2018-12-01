import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import propertyIsEnumerable from "../propertyIsEnumerable";
import {FunctionType} from "../functions/propertyIsEnumerable";

interface TestFn {
    objPropertyIsEnumerable: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {
        value: "Value"
    };

    const func1 = fn.objPropertyIsEnumerable("value").fn;
    expect(func1(obj)).to.equal(obj.propertyIsEnumerable("value"));
};

describe("propertyIsEnumerable", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            objPropertyIsEnumerable: propertyIsEnumerable
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
