import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import escape from "../escape";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const escape = fn.escape();

    const input = ['a', 'b', 'c', 'd'];
    const output = escape(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("escape", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            escape: escape
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
