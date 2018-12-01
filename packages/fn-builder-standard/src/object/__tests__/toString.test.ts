import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toString from "../toString";
import {FunctionType} from "../functions/toString";

interface TestFn {
    objToString: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const func1 = fn.objToString.fn;
    expect(func1(date)).to.deep.equal(date.toString());
};

describe("toString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            objToString: toString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
