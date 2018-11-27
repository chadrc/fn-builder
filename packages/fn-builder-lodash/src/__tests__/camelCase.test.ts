import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import camelCase from "../camelCase";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const camelCase = fn.camelCase();

    const input = ['a', 'b', 'c', 'd'];
    const output = camelCase(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("camelCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            camelCase: camelCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
