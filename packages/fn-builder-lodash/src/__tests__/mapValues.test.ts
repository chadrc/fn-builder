import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import mapValues from "../mapValues";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const mapValues = fn.mapValues();

    const input = ['a', 'b', 'c', 'd'];
    const output = mapValues(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("mapValues", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            mapValues: mapValues
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
