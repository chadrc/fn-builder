import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropWhile from "../dropWhile";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const dropWhile = fn.dropWhile();

    const input = ['a', 'b', 'c', 'd'];
    const output = dropWhile(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            dropWhile: dropWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
