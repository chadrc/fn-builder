import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import range from "../range";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const range = fn.range();

    const input = ['a', 'b', 'c', 'd'];
    const output = range(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("range", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            range: range
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
