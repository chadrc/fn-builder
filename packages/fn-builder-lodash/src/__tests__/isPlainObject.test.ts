import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isPlainObject from "../isPlainObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isPlainObject = fn.isPlainObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = isPlainObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isPlainObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isPlainObject: isPlainObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
