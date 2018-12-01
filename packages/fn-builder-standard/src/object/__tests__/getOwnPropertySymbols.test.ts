import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import getOwnPropertySymbols from "../getOwnPropertySymbols";
import {FunctionType} from "../functions/getOwnPropertySymbols";

interface TestFn {
    getOwnPropertySymbols: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.getOwnPropertySymbols(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("getOwnPropertySymbols", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            getOwnPropertySymbols: getOwnPropertySymbols
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
