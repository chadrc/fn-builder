import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import findIndex from "../findIndex";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const findIndex = fn.findIndex();

    const input = ['a', 'b', 'c', 'd'];
    const output = findIndex(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("findIndex", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            findIndex: findIndex
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
