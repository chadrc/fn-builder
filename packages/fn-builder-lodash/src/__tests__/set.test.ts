import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import set from "../set";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const set = fn.set();

    const input = ['a', 'b', 'c', 'd'];
    const output = set(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("set", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            set: set
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
