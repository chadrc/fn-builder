import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import words from "../words";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const words = fn.words();

    const input = ['a', 'b', 'c', 'd'];
    const output = words(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("words", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            words: words
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
