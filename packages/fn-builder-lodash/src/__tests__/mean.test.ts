import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import mean from "../mean";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const mean = fn.mean();

    const input = ['a', 'b', 'c', 'd'];
    const output = mean(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("mean", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            mean: mean
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
