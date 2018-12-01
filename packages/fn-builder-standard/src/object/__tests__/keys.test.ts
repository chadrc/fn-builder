import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import keys from "../keys";
import {FunctionType} from "../functions/keys";

interface TestFn {
    keys: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.keys(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
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
