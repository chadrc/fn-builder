import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isFrozen from "../isFrozen";
import {FunctionType} from "../functions/isFrozen";

interface TestFn {
    isFrozen: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.isFrozen(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
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
