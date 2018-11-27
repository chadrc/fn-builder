import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import thru from "../thru";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const thru = fn.thru();

    const input = ['a', 'b', 'c', 'd'];
    const output = thru(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("thru", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            thru: thru
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
