import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isDate from "../isDate";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isDate = fn.isDate();

    const input = ['a', 'b', 'c', 'd'];
    const output = isDate(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isDate", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isDate: isDate
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
