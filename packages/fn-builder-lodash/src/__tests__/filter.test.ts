import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import filter from "../filter";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const filter = fn.filter();

    const input = ['a', 'b', 'c', 'd'];
    const output = filter(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("filter", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            filter: filter
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
