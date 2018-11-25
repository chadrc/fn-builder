import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flattenDeep from "../flattenDeep";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const flattenDeep = fn.flattenDeep();

    const input = ['a', 'b', 'c', 'd'];
    const output = flattenDeep(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flattenDeep", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flattenDeep: flattenDeep
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
