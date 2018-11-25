import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isNull from "../isNull";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isNull = fn.isNull();

    const input = ['a', 'b', 'c', 'd'];
    const output = isNull(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isNull", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isNull: isNull
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
