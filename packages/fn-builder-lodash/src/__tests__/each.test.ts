import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import each from "../each";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const each = fn.each();

    const input = ['a', 'b', 'c', 'd'];
    const output = each(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("each", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            each: each
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
