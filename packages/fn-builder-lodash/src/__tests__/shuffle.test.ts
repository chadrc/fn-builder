import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import shuffle from "../shuffle";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const shuffle = fn.shuffle();

    const input = ['a', 'b', 'c', 'd'];
    const output = shuffle(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("shuffle", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            shuffle: shuffle
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
