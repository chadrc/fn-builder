import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import intersectionWith from "../intersectionWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const intersectionWith = fn.intersectionWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = intersectionWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("intersectionWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            intersectionWith: intersectionWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
