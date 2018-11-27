import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isNil from "../isNil";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isNil = fn.isNil();

    const input = ['a', 'b', 'c', 'd'];
    const output = isNil(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isNil", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isNil: isNil
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
