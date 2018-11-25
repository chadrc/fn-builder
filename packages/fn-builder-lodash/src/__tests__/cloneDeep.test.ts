import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import cloneDeep from "../cloneDeep";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const cloneDeep = fn.cloneDeep();

    const input = ['a', 'b', 'c', 'd'];
    const output = cloneDeep(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("cloneDeep", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            cloneDeep: cloneDeep
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
