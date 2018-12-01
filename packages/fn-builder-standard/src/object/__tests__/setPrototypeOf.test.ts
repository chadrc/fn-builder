import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import setPrototypeOf from "../setPrototypeOf";
import {FunctionType} from "../functions/setPrototypeOf";

interface TestFn {
    setPrototypeOf: FunctionType
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

    const func1 = fn.setPrototypeOf(proto).fn;

    const result = func1(obj);

    expect(Object.getPrototypeOf(result)).to.deep.equal(proto);
};

describe("setPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            setPrototypeOf: setPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
