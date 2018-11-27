import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import noConflict from "../noConflict";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const noConflict = fn.noConflict();

    const input = ['a', 'b', 'c', 'd'];
    const output = noConflict(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("noConflict", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            noConflict: noConflict
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
