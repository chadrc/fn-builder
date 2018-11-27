import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import negate from "../negate";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const negate = fn.negate();

    const input = ['a', 'b', 'c', 'd'];
    const output = negate(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("negate", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            negate: negate
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
