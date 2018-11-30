import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import trimEnd from "../trimEnd";
import {FunctionType} from "../functions/trimEnd";

interface TestFn {
    trimEnd: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.trimEnd.fn;

    expect(func1("\n\t       Hello, World!        \n\t")).to.equal("\n\t       Hello, World!");
};

describe("trimEnd", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            trimEnd: trimEnd
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
