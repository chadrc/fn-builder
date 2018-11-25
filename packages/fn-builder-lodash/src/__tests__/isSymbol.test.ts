import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isSymbol from "../isSymbol";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isSymbol = fn.isSymbol();

    const input = ['a', 'b', 'c', 'd'];
    const output = isSymbol(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isSymbol", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isSymbol: isSymbol
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
