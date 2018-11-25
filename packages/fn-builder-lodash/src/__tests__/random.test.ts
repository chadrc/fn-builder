import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import random from "../random";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const random = fn.random();

    const input = ['a', 'b', 'c', 'd'];
    const output = random(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("random", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            random: random
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
