import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import reduce from "../reduce";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const reduce = fn.reduce();

    const input = ['a', 'b', 'c', 'd'];
    const output = reduce(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("reduce", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            reduce: reduce
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
