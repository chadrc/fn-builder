import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defaultsDeep from "../defaultsDeep";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const defaultsDeep = fn.defaultsDeep();

    const input = ['a', 'b', 'c', 'd'];
    const output = defaultsDeep(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("defaultsDeep", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defaultsDeep: defaultsDeep
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
