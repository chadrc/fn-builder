import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import now from "../now";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const now = fn.now();

    const input = ['a', 'b', 'c', 'd'];
    const output = now(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("now", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            now: now
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
