import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import slice from "../slice";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const slice = fn.slice();

    const input = ['a', 'b', 'c', 'd'];
    const output = slice(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("slice", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            slice: slice
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
