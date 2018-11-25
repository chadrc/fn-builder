import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flatMap from "../flatMap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const flatMap = fn.flatMap();

    const input = ['a', 'b', 'c', 'd'];
    const output = flatMap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flatMap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flatMap: flatMap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
