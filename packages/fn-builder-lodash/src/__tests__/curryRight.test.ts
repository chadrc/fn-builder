import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import curryRight from "../curryRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const curryRight = fn.curryRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = curryRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("curryRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            curryRight: curryRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
