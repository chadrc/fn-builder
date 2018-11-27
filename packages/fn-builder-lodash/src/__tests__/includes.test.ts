import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import includes from "../includes";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const includes = fn.includes();

    const input = ['a', 'b', 'c', 'd'];
    const output = includes(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("includes", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            includes: includes
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
