import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import differenceWith from "../differenceWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const differenceWith = fn.differenceWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = differenceWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("differenceWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            differenceWith: differenceWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
