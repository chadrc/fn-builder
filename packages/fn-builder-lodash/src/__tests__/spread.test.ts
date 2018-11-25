import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import spread from "../spread";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const spread = fn.spread();

    const input = ['a', 'b', 'c', 'd'];
    const output = spread(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("spread", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            spread: spread
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
