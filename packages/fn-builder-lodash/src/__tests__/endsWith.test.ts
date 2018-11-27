import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import endsWith from "../endsWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const endsWith = fn.endsWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = endsWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("endsWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            endsWith: endsWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
