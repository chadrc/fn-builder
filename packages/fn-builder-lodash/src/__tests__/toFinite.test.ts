import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toFinite from "../toFinite";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toFinite = fn.toFinite();

    const input = ['a', 'b', 'c', 'd'];
    const output = toFinite(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toFinite", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toFinite: toFinite
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
