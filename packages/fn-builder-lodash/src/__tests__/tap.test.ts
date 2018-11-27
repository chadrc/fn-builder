import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import tap from "../tap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const tap = fn.tap();

    const input = ['a', 'b', 'c', 'd'];
    const output = tap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("tap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            tap: tap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
