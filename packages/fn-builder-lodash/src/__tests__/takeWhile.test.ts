import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import takeWhile from "../takeWhile";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const takeWhile = fn.takeWhile();

    const input = ['a', 'b', 'c', 'd'];
    const output = takeWhile(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("takeWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            takeWhile: takeWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
