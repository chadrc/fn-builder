import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import findLastIndex from "../findLastIndex";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const findLastIndex = fn.findLastIndex();

    const input = ['a', 'b', 'c', 'd'];
    const output = findLastIndex(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("findLastIndex", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            findLastIndex: findLastIndex
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
