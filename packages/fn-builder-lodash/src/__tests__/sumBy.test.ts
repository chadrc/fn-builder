import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sumBy from "../sumBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sumBy = fn.sumBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = sumBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sumBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sumBy: sumBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});