import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toPairs from "../toPairs";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toPairs = fn.toPairs();

    const input = ['a', 'b', 'c', 'd'];
    const output = toPairs(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toPairs", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toPairs: toPairs
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
