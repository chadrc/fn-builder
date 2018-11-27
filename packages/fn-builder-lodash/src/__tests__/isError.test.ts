import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isError from "../isError";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isError = fn.isError();

    const input = ['a', 'b', 'c', 'd'];
    const output = isError(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isError", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isError: isError
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
