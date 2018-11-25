import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isNumber from "../isNumber";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isNumber = fn.isNumber();

    const input = ['a', 'b', 'c', 'd'];
    const output = isNumber(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isNumber", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isNumber: isNumber
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
