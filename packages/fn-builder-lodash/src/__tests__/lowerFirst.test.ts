import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import lowerFirst from "../lowerFirst";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const lowerFirst = fn.lowerFirst();

    const input = ['a', 'b', 'c', 'd'];
    const output = lowerFirst(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("lowerFirst", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            lowerFirst: lowerFirst
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
