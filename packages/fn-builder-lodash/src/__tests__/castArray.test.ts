import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import castArray from "../castArray";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const castArray = fn.castArray();

    const input = ['a', 'b', 'c', 'd'];
    const output = castArray(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("castArray", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            castArray: castArray
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
