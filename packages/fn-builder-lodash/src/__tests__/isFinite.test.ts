import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isFinite from "../isFinite";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isFinite = fn.isFinite();

    const input = ['a', 'b', 'c', 'd'];
    const output = isFinite(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isFinite", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isFinite: isFinite
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
