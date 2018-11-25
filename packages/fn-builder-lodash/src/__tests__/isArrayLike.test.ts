import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isArrayLike from "../isArrayLike";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isArrayLike = fn.isArrayLike();

    const input = ['a', 'b', 'c', 'd'];
    const output = isArrayLike(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isArrayLike", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isArrayLike: isArrayLike
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
