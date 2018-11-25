import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import padStart from "../padStart";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const padStart = fn.padStart();

    const input = ['a', 'b', 'c', 'd'];
    const output = padStart(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("padStart", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            padStart: padStart
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
