import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLocaleUpperCase from "../toLocaleUpperCase";
import {FunctionType} from "../functions/toLocaleUpperCase";

interface TestFn {
    toLocaleUpperCase: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toLocaleUpperCase("en-US").fn;

    expect(func1('İstanbul')).to.equal("İSTANBUL");

    const func2 = fn.toLocaleUpperCase("tr").fn;

    expect(func2('İstanbul')).to.equal("İSTANBUL");
};

describe("toLocaleUpperCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toLocaleUpperCase: toLocaleUpperCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
