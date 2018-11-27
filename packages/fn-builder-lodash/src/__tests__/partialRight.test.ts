import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import partialRight from "../partialRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const partialRight = fn.partialRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = partialRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("partialRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            partialRight: partialRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
