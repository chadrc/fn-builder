import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import initial from "../initial";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const initial = fn.initial();

    const input = ['a', 'b', 'c', 'd'];
    const output = initial(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("initial", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            initial: initial
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
