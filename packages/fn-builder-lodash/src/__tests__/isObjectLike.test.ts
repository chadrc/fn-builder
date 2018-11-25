import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isObjectLike from "../isObjectLike";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isObjectLike = fn.isObjectLike();

    const input = ['a', 'b', 'c', 'd'];
    const output = isObjectLike(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isObjectLike", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isObjectLike: isObjectLike
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
