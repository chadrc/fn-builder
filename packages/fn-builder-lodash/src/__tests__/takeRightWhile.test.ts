import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import takeRightWhile from "../takeRightWhile";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const takeRightWhile = fn.takeRightWhile();

    const input = ['a', 'b', 'c', 'd'];
    const output = takeRightWhile(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("takeRightWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            takeRightWhile: takeRightWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
