import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLocaleLowerCase from "../toLocaleLowerCase";
import {FunctionType} from "../functions/toLocaleLowerCase";

interface TestFn {
    toLocaleLowerCase: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.toLocaleLowerCase("en-US").fn;

    const expected1 = ("İstanbul" as any).toLocaleLowerCase("en-US");

    expect(func1('İstanbul')).to.equal(expected1);

    const func2 = fn.toLocaleLowerCase("tr").fn;

    expect(func2('İstanbul')).to.equal("istanbul");
};

describe("toLocaleLowerCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toLocaleLowerCase: toLocaleLowerCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
