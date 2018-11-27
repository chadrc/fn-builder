import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isMatchWith from "../isMatchWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isMatchWith = fn.isMatchWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = isMatchWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isMatchWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isMatchWith: isMatchWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
