import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toUpper from "../toUpper";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toUpper = fn.toUpper();

    const input = ['a', 'b', 'c', 'd'];
    const output = toUpper(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toUpper", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toUpper: toUpper
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
