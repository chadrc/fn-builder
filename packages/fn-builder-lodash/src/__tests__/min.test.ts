import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import min from "../min";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const min = fn.min();

    const input = ['a', 'b', 'c', 'd'];
    const output = min(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("min", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            min: min
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
