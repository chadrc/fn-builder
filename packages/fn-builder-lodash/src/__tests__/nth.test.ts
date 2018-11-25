import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import nth from "../nth";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const nth = fn.nth();

    const input = ['a', 'b', 'c', 'd'];
    const output = nth(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("nth", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            nth: nth
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
