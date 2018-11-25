import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forEachRight from "../forEachRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const forEachRight = fn.forEachRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = forEachRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forEachRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forEachRight: forEachRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
