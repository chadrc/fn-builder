import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toNumber from "../toNumber";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const toNumber = fn.toNumber();

    const input = ['a', 'b', 'c', 'd'];
    const output = toNumber(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toNumber", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toNumber: toNumber
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
