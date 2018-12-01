import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import create from "../create";
import {FunctionType} from "../functions/create";

interface TestFn {
    create: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const proto = {
        name: "TestObject",
        addNumbers: (num1: number, num2: number) => num1 + num2
    };

    const properties = {
        subNumbers: {
            value: (num1: number, num2: number) => num1 - num2
        }
    };

    const expected = Object.create(proto, properties);

    const func1 = fn.create(proto).fn;
    expect(func1(properties)).to.deep.equal(expected);
};

describe("create", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            create: create
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
