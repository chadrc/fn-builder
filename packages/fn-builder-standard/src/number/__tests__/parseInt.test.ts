import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import parseInt from "../parseInt";
import {FunctionType} from "../functions/parseInt";

interface TestFn {
    parseInt: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.parseInt.fn;
    expect(func1("15")).to.equal(15);
};

describe("parseInt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            parseInt: parseInt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
