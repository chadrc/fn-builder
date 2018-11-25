import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import mergeWith from "../mergeWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const mergeWith = fn.mergeWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = mergeWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("mergeWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            mergeWith: mergeWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
