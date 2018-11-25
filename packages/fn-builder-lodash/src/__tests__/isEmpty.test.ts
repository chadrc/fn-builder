import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isEmpty from "../isEmpty";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isEmpty = fn.isEmpty();

    const input = ['a', 'b', 'c', 'd'];
    const output = isEmpty(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isEmpty", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isEmpty: isEmpty
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});