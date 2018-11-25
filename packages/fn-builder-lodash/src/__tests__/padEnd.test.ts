import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import padEnd from "../padEnd";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const padEnd = fn.padEnd();

    const input = ['a', 'b', 'c', 'd'];
    const output = padEnd(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("padEnd", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            padEnd: padEnd
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});