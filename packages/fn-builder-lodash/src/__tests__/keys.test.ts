import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import keys from "../keys";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const keys = fn.keys();

    const input = ['a', 'b', 'c', 'd'];
    const output = keys(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("keys", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            keys: keys
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
