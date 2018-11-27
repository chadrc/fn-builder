import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import fill from "../fill";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const fill = fn.fill();

    const input = ['a', 'b', 'c', 'd'];
    const output = fill(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("fill", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            fill: fill
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
