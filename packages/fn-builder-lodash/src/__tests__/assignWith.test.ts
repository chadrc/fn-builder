import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assignWith from "../assignWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const assignWith = fn.assignWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = assignWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("assignWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assignWith: assignWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
