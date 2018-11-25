import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import eq from "../eq";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const eq = fn.eq();

    const input = ['a', 'b', 'c', 'd'];
    const output = eq(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("eq", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            eq: eq
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
