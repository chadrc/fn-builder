import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lte from "../lte";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const lte = fn.lte();

    const input = ['a', 'b', 'c', 'd'];
    const output = lte(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("lte", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lte: lte
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
