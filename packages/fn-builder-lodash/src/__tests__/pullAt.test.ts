import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pullAt from "../pullAt";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const pullAt = fn.pullAt();

    const input = ['a', 'b', 'c', 'd'];
    const output = pullAt(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pullAt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pullAt: pullAt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
