import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isNaN from "../isNaN";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isNaN = fn.isNaN();

    const input = ['a', 'b', 'c', 'd'];
    const output = isNaN(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isNaN", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isNaN: isNaN
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
