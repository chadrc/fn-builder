import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import take from "../take";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const take = fn.take();

    const input = ['a', 'b', 'c', 'd'];
    const output = take(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("take", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            take: take
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
