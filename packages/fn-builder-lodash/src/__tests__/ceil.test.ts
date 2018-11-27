import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import ceil from "../ceil";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const ceil = fn.ceil();

    const input = ['a', 'b', 'c', 'd'];
    const output = ceil(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("ceil", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            ceil: ceil
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
