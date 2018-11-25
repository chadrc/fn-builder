import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stubArray from "../stubArray";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const stubArray = fn.stubArray();

    const input = ['a', 'b', 'c', 'd'];
    const output = stubArray(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("stubArray", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stubArray: stubArray
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
