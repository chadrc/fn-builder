import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import noop from "../noop";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const noop = fn.noop();

    const input = ['a', 'b', 'c', 'd'];
    const output = noop(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("noop", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            noop: noop
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
