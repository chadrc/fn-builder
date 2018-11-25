import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isElement from "../isElement";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isElement = fn.isElement();

    const input = ['a', 'b', 'c', 'd'];
    const output = isElement(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isElement", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isElement: isElement
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
