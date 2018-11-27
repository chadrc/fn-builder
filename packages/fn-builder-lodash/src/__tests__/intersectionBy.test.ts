import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import intersectionBy from "../intersectionBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const intersectionBy = fn.intersectionBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = intersectionBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("intersectionBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            intersectionBy: intersectionBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
