import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import trim from "../trim";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const trim = fn.trim();

    const input = ['a', 'b', 'c', 'd'];
    const output = trim(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("trim", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            trim: trim
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
