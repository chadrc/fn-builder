import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import wrap from "../wrap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const wrap = fn.wrap();

    const input = ['a', 'b', 'c', 'd'];
    const output = wrap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("wrap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            wrap: wrap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
