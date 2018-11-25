import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toInteger from "../toInteger";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toInteger = fn.toInteger();

    const input = ['a', 'b', 'c', 'd'];
    const output = toInteger(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toInteger", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toInteger: toInteger
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
