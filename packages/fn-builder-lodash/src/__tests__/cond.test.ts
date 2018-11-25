import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import cond from "../cond";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const cond = fn.cond();

    const input = ['a', 'b', 'c', 'd'];
    const output = cond(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("cond", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            cond: cond
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
