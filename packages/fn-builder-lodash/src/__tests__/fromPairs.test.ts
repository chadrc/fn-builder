import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import fromPairs from "../fromPairs";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const fromPairs = fn.fromPairs();

    const input = ['a', 'b', 'c', 'd'];
    const output = fromPairs(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("fromPairs", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            fromPairs: fromPairs
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
