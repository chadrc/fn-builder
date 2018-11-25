import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import orderBy from "../orderBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const orderBy = fn.orderBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = orderBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("orderBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            orderBy: orderBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
