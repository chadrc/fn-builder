import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import propertyOf from "../propertyOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const propertyOf = fn.propertyOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = propertyOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("propertyOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            propertyOf: propertyOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
