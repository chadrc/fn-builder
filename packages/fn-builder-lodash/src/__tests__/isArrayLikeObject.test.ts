import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isArrayLikeObject from "../isArrayLikeObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isArrayLikeObject = fn.isArrayLikeObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = isArrayLikeObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isArrayLikeObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isArrayLikeObject: isArrayLikeObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
