import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sampleSize from "../sampleSize";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const sampleSize = fn.sampleSize();

    const input = ['a', 'b', 'c', 'd'];
    const output = sampleSize(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sampleSize", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sampleSize: sampleSize
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
