import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import groupBy from "../groupBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const groupBy = fn.groupBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = groupBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("groupBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            groupBy: groupBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
