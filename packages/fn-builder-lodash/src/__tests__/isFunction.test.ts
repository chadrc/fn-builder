import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isFunction from "../isFunction";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isFunction = fn.isFunction();

    const input = ['a', 'b', 'c', 'd'];
    const output = isFunction(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isFunction", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isFunction: isFunction
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
