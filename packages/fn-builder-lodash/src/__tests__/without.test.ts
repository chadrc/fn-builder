import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import without from "../without";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const without = fn.without();

    const input = ['a', 'b', 'c', 'd'];
    const output = without(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("without", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            without: without
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
