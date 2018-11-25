import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import capitalize from "../capitalize";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const capitalize = fn.capitalize();

    const input = ['a', 'b', 'c', 'd'];
    const output = capitalize(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("capitalize", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            capitalize: capitalize
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
