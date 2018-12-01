import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import keys from "../keys";
import {FunctionType} from "../functions/keys";

interface TestFn {
    keys: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {
        addNumbers: {
            value: (num1: number, num2: number) => num1 + num2
        },
        subNumbers: {
            value: (num1: number, num2: number) => num1 - num2
        }
    };

    const func1 = fn.keys.fn;
    expect(func1(obj)).to.deep.equal(["addNumbers", "subNumbers"]);
};

describe("keys", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            keys: keys
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
