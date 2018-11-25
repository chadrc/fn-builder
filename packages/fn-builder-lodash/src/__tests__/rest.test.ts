import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import rest from "../rest";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const rest = fn.rest();

    const input = ['a', 'b', 'c', 'd'];
    const output = rest(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("rest", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            rest: rest
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
