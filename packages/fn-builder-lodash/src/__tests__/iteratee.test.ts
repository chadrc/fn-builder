import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import iteratee from "../iteratee";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const iteratee = fn.iteratee();

    const input = ['a', 'b', 'c', 'd'];
    const output = iteratee(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("iteratee", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            iteratee: iteratee
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
