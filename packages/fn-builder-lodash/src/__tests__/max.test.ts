import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import max from "../max";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const max = fn.max();

    const input = ['a', 'b', 'c', 'd'];
    const output = max(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("max", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            max: max
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
