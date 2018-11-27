import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import rangeRight from "../rangeRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const rangeRight = fn.rangeRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = rangeRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("rangeRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            rangeRight: rangeRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
