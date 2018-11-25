import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import map from "../map";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const map = fn.map();

    const input = ['a', 'b', 'c', 'd'];
    const output = map(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("map", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            map: map
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
