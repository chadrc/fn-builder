import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isPrototypeOf from "../isPrototypeOf";
import {FunctionType} from "../functions/isPrototypeOf";

interface TestFn {
    objIsPrototypeOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const proto = {
        addNumbers: {
            value: (num1: number, num2: number) => num1 + num2
        },
        subNumbers: {
            value: (num1: number, num2: number) => num1 - num2
        }
    };

    const obj = {};

    const func1 = fn.objIsPrototypeOf(proto).fn;

    expect(func1(obj)).to.equal(false);

    // Object.setPrototypeOf(obj, proto);
    //
    // expect(func1(obj)).to.equal(true);
};

describe("isPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            objIsPrototypeOf: isPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
