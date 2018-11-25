import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assignInWith from "../assignInWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const assignInWith = fn.assignInWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = assignInWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("assignInWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assignInWith: assignInWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
