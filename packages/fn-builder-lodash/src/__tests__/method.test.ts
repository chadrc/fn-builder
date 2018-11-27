import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import method from "../method";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const method = fn.method();

    const input = ['a', 'b', 'c', 'd'];
    const output = method(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("method", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            method: method
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
