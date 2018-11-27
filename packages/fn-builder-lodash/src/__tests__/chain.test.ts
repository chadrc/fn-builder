import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import chain from "../chain";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const chain = fn.chain();

    const input = ['a', 'b', 'c', 'd'];
    const output = chain(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("chain", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            chain: chain
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
