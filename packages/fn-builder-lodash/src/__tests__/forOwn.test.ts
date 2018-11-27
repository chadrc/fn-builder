import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forOwn from "../forOwn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const forOwn = fn.forOwn();

    const input = ['a', 'b', 'c', 'd'];
    const output = forOwn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forOwn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forOwn: forOwn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
