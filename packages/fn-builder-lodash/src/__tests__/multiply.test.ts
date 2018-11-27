import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import multiply from "../multiply";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const multiply = fn.multiply();

    const input = ['a', 'b', 'c', 'd'];
    const output = multiply(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("multiply", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            multiply: multiply
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
