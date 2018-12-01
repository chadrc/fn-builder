import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import freeze from "../freeze";
import {FunctionType} from "../functions/freeze";

interface TestFn {
    freeze: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {
        value: "value"
    };

    const func1 = fn.freeze.fn;
    const frozen = func1(obj);

    expect(Object.isFrozen(frozen)).to.equal(true);
};

describe("freeze", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            freeze: freeze
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
