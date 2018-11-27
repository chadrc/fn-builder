import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isMap from "../isMap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isMap = fn.isMap();

    const input = ['a', 'b', 'c', 'd'];
    const output = isMap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isMap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isMap: isMap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
