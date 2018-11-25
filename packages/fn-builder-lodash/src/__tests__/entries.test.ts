import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import entries from "../entries";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const entries = fn.entries();

    const input = ['a', 'b', 'c', 'd'];
    const output = entries(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("entries", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            entries: entries
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
