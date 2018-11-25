import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import reduceRight from "../reduceRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const reduceRight = fn.reduceRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = reduceRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("reduceRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            reduceRight: reduceRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
