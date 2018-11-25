import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flatMapDeep from "../flatMapDeep";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const flatMapDeep = fn.flatMapDeep();

    const input = ['a', 'b', 'c', 'd'];
    const output = flatMapDeep(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flatMapDeep", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flatMapDeep: flatMapDeep
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
