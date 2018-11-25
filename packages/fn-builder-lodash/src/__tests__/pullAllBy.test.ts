import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pullAllBy from "../pullAllBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const pullAllBy = fn.pullAllBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = pullAllBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pullAllBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pullAllBy: pullAllBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
