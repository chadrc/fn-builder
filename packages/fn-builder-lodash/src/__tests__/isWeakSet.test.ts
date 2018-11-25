import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isWeakSet from "../isWeakSet";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isWeakSet = fn.isWeakSet();

    const input = ['a', 'b', 'c', 'd'];
    const output = isWeakSet(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isWeakSet", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isWeakSet: isWeakSet
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
