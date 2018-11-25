import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import nthArg from "../nthArg";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const nthArg = fn.nthArg();

    const input = ['a', 'b', 'c', 'd'];
    const output = nthArg(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("nthArg", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            nthArg: nthArg
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
