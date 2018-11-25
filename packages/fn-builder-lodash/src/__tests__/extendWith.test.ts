import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import extendWith from "../extendWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const extendWith = fn.extendWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = extendWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("extendWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            extendWith: extendWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
