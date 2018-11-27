import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import cloneDeepWith from "../cloneDeepWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const cloneDeepWith = fn.cloneDeepWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = cloneDeepWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("cloneDeepWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            cloneDeepWith: cloneDeepWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
