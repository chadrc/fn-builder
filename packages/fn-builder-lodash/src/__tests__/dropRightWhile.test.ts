import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropRightWhile from "../dropRightWhile";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const dropRightWhile = fn.dropRightWhile();

    const input = ['a', 'b', 'c', 'd'];
    const output = dropRightWhile(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("dropRightWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            dropRightWhile: dropRightWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
