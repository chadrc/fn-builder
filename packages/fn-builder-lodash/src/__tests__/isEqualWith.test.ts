import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isEqualWith from "../isEqualWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isEqualWith = fn.isEqualWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = isEqualWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isEqualWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isEqualWith: isEqualWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
