import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isLength from "../isLength";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isLength = fn.isLength();

    const input = ['a', 'b', 'c', 'd'];
    const output = isLength(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isLength", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isLength: isLength
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
