import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flatten from "../flatten";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const flatten = fn.flatten();

    const input = ['a', 'b', 'c', 'd'];
    const output = flatten(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flatten", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flatten: flatten
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
