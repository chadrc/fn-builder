import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isMatch from "../isMatch";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isMatch = fn.isMatch();

    const input = ['a', 'b', 'c', 'd'];
    const output = isMatch(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isMatch", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isMatch: isMatch
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
