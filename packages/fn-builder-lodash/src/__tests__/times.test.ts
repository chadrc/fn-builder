import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import times from "../times";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const times = fn.times();

    const input = ['a', 'b', 'c', 'd'];
    const output = times(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("times", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            times: times
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
