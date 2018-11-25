import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import every from "../every";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const every = fn.every();

    const input = ['a', 'b', 'c', 'd'];
    const output = every(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("every", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            every: every
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
