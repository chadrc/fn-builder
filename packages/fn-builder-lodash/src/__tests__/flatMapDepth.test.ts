import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flatMapDepth from "../flatMapDepth";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const flatMapDepth = fn.flatMapDepth();

    const input = ['a', 'b', 'c', 'd'];
    const output = flatMapDepth(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flatMapDepth", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flatMapDepth: flatMapDepth
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
