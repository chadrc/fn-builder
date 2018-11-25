import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import startsWith from "../startsWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const startsWith = fn.startsWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = startsWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("startsWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            startsWith: startsWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});