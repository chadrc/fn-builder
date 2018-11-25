import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pullAll from "../pullAll";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const pullAll = fn.pullAll();

    const input = ['a', 'b', 'c', 'd'];
    const output = pullAll(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pullAll", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pullAll: pullAll
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
