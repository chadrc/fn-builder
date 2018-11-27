import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import updateWith from "../updateWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const updateWith = fn.updateWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = updateWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("updateWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            updateWith: updateWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
