import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import invokeMap from "../invokeMap";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const invokeMap = fn.invokeMap();

    const input = ['a', 'b', 'c', 'd'];
    const output = invokeMap(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("invokeMap", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            invokeMap: invokeMap
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
