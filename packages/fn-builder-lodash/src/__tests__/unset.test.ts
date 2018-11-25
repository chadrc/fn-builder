import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unset from "../unset";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const unset = fn.unset();

    const input = ['a', 'b', 'c', 'd'];
    const output = unset(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unset", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unset: unset
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
