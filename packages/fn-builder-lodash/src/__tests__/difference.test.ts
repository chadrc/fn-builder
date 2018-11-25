import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import difference from "../difference";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const difference = fn.difference([2, 3], [4]);

    const output = difference([2, 1, 4]);

    expect(output).to.deep.equal([1]);
};

describe("difference", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            difference: difference
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
