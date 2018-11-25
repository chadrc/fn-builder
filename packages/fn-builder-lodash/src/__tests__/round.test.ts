import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import round from "../round";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const round = fn.round();

    const input = ['a', 'b', 'c', 'd'];
    const output = round(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("round", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            round: round
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
