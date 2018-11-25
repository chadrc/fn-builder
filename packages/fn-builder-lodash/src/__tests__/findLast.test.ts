import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import findLast from "../findLast";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const findLast = fn.findLast();

    const input = ['a', 'b', 'c', 'd'];
    const output = findLast(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("findLast", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            findLast: findLast
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
