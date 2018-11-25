import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lt from "../lt";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const lt = fn.lt();

    const input = ['a', 'b', 'c', 'd'];
    const output = lt(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("lt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lt: lt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
