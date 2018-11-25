import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sample from "../sample";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sample = fn.sample();

    const input = ['a', 'b', 'c', 'd'];
    const output = sample(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sample", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sample: sample
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
