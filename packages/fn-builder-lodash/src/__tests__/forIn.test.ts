import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forIn from "../forIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const forIn = fn.forIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = forIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forIn: forIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
