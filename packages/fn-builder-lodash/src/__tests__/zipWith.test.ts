import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import zipWith from "../zipWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const zipWith = fn.zipWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = zipWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("zipWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            zipWith: zipWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
