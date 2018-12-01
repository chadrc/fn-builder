import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import setPrototypeOf from "../setPrototypeOf";
import {FunctionType} from "../functions/setPrototypeOf";

interface TestFn {
    setPrototypeOf: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.setPrototypeOf(/or/).fn;
    expect(func1("Hello World")).to.deep.equal(["or"]);
};

describe("setPrototypeOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            setPrototypeOf: setPrototypeOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
