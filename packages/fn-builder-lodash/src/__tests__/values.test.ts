import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import values from "../values";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const values = fn.values();

    const input = ['a', 'b', 'c', 'd'];
    const output = values(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("values", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            values: values
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
