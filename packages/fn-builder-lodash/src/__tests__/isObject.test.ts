import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isObject from "../isObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isObject = fn.isObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = isObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isObject: isObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
