import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import first from "../first";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const first = fn.first();

    const input = ['a', 'b', 'c', 'd'];
    const output = first(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("first", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            first: first
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
