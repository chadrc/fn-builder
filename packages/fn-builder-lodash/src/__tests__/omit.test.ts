import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import omit from "../omit";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const omit = fn.omit();

    const input = ['a', 'b', 'c', 'd'];
    const output = omit(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("omit", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            omit: omit
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
