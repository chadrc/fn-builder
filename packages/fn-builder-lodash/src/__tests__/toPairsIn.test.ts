import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toPairsIn from "../toPairsIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toPairsIn = fn.toPairsIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = toPairsIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toPairsIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toPairsIn: toPairsIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});