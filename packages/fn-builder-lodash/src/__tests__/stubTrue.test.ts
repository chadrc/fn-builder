import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stubTrue from "../stubTrue";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const stubTrue = fn.stubTrue();

    const input = ['a', 'b', 'c', 'd'];
    const output = stubTrue(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("stubTrue", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stubTrue: stubTrue
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
