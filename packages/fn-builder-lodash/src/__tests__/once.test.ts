import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import once from "../once";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const once = fn.once();

    const input = ['a', 'b', 'c', 'd'];
    const output = once(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("once", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            once: once
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
