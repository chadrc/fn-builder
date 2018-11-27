import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import size from "../size";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const size = fn.size();

    const input = ['a', 'b', 'c', 'd'];
    const output = size(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("size", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            size: size
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
