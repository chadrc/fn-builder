import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import merge from "../merge";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const merge = fn.merge();

    const input = ['a', 'b', 'c', 'd'];
    const output = merge(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("merge", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            merge: merge
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
