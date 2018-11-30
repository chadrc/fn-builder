import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import repeat from "../repeat";
import {FunctionType} from "../functions/repeat";

interface TestFn {
    repeat: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.repeat(3).fn;

    expect(func1("Hello")).to.equal("HelloHelloHello");
};

describe("repeat", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            repeat: repeat
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
