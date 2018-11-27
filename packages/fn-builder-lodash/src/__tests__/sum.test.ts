import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sum from "../sum";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const sum = fn.sum();

    const input = ['a', 'b', 'c', 'd'];
    const output = sum(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sum", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sum: sum
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
