import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forEach from "../forEach";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const forEach = fn.forEach();

    const input = ['a', 'b', 'c', 'd'];
    const output = forEach(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forEach", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forEach: forEach
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
