import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import xorBy from "../xorBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const xorBy = fn.xorBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = xorBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("xorBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            xorBy: xorBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
