import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import snakeCase from "../snakeCase";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const snakeCase = fn.snakeCase();

    const input = ['a', 'b', 'c', 'd'];
    const output = snakeCase(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("snakeCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            snakeCase: snakeCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
