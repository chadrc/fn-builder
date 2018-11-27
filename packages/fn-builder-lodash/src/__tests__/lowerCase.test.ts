import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lowerCase from "../lowerCase";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const lowerCase = fn.lowerCase();

    const input = ['a', 'b', 'c', 'd'];
    const output = lowerCase(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("lowerCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lowerCase: lowerCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
