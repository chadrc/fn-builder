import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLocaleString from "../toLocaleString";
import {FunctionType} from "../functions/toLocaleString";

interface TestFn {
    objToLocaleString: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const func1 = fn.objToLocaleString("ar-EG").fn;
    const expected = date.toLocaleString("ar-EG");

    expect(func1(date)).to.deep.equal(expected);
};

describe("toLocaleString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            objToLocaleString: toLocaleString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
