import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import curry from "../curry";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const curry = fn.curry();

    const input = ['a', 'b', 'c', 'd'];
    const output = curry(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("curry", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            curry: curry
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
