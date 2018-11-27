import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import kebabCase from "../kebabCase";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const kebabCase = fn.kebabCase();

    const input = ['a', 'b', 'c', 'd'];
    const output = kebabCase(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("kebabCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            kebabCase: kebabCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
