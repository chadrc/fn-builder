import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import clone from "../clone";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const clone = fn.clone();

    const input = ['a', 'b', 'c', 'd'];
    const output = clone(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("clone", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            clone: clone
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
