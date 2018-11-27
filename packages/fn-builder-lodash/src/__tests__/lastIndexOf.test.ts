import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lastIndexOf from "../lastIndexOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const lastIndexOf = fn.lastIndexOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = lastIndexOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("lastIndexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lastIndexOf: lastIndexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
