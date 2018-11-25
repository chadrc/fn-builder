import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import ary from "../ary";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const ary = fn.ary();

    const input = ['a', 'b', 'c', 'd'];
    const output = ary(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("ary", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            ary: ary
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
