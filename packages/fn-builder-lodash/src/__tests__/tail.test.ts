import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import tail from "../tail";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const tail = fn.tail();

    const input = ['a', 'b', 'c', 'd'];
    const output = tail(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("tail", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            tail: tail
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
