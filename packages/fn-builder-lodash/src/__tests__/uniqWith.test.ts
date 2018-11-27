import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import uniqWith from "../uniqWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const uniqWith = fn.uniqWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = uniqWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("uniqWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            uniqWith: uniqWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
