import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toArray from "../toArray";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const toArray = fn.toArray();

    const input = ['a', 'b', 'c', 'd'];
    const output = toArray(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toArray", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toArray: toArray
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
