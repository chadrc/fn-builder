import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import trimStart from "../trimStart";
import {FunctionType} from "../functions/trimStart";

interface TestFn {
    trimStart: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.trimStart.fn;

    expect(func1("\n\t       Hello, World!        \n\t")).to.equal("Hello, World!        \n\t");
};

describe("trimStart", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            trimStart: trimStart
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
