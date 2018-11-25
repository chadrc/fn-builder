import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defaults from "../defaults";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const defaults = fn.defaults();

    const input = ['a', 'b', 'c', 'd'];
    const output = defaults(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("defaults", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defaults: defaults
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
