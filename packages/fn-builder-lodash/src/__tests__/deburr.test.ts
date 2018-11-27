import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import deburr from "../deburr";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const deburr = fn.deburr();

    const input = ['a', 'b', 'c', 'd'];
    const output = deburr(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("deburr", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            deburr: deburr
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
