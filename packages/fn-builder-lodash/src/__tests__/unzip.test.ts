import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unzip from "../unzip";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const unzip = fn.unzip();

    const input = ['a', 'b', 'c', 'd'];
    const output = unzip(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unzip", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unzip: unzip
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});