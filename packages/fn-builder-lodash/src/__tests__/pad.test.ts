import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pad from "../pad";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const pad = fn.pad();

    const input = ['a', 'b', 'c', 'd'];
    const output = pad(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pad", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pad: pad
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
