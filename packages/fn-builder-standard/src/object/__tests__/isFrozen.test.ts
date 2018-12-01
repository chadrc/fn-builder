import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isFrozen from "../isFrozen";
import {FunctionType} from "../functions/isFrozen";

interface TestFn {
    isFrozen: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {};
    const func1 = fn.isFrozen.fn;
    expect(func1(obj)).to.equal(false);

    Object.freeze(obj);

    expect(func1(obj)).to.equal(true);
};

describe("isFrozen", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isFrozen: isFrozen
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
