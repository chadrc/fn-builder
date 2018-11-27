import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isUndefined from "../isUndefined";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isUndefined = fn.isUndefined();

    const input = ['a', 'b', 'c', 'd'];
    const output = isUndefined(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isUndefined", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isUndefined: isUndefined
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
