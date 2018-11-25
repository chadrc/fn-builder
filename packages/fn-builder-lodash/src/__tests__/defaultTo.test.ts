import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defaultTo from "../defaultTo";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const defaultTo = fn.defaultTo();

    const input = ['a', 'b', 'c', 'd'];
    const output = defaultTo(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("defaultTo", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defaultTo: defaultTo
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
