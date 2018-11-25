import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isEqual from "../isEqual";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isEqual = fn.isEqual();

    const input = ['a', 'b', 'c', 'd'];
    const output = isEqual(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isEqual", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isEqual: isEqual
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
