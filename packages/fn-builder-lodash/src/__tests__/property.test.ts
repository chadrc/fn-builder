import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import property from "../property";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const property = fn.property();

    const input = ['a', 'b', 'c', 'd'];
    const output = property(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("property", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            property: property
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
