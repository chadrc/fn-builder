import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import gte from "../gte";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const gte = fn.gte();

    const input = ['a', 'b', 'c', 'd'];
    const output = gte(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("gte", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            gte: gte
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
