import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isWeakMap from "../isWeakMap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isWeakMap = fn.isWeakMap();

    const input = ['a', 'b', 'c', 'd'];
    const output = isWeakMap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isWeakMap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isWeakMap: isWeakMap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
