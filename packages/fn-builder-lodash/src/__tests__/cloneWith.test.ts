import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import cloneWith from "../cloneWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const cloneWith = fn.cloneWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = cloneWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("cloneWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            cloneWith: cloneWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
