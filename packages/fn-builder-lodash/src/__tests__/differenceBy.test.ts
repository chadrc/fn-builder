import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import differenceBy from "../differenceBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const differenceBy = fn.differenceBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = differenceBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("differenceBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            differenceBy: differenceBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
