import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import mapKeys from "../mapKeys";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const mapKeys = fn.mapKeys();

    const input = ['a', 'b', 'c', 'd'];
    const output = mapKeys(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("mapKeys", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            mapKeys: mapKeys
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
