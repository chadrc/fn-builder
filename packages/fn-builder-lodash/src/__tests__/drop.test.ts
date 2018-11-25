import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import drop from "../drop";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const drop = fn.drop();

    const input = ['a', 'b', 'c', 'd'];
    const output = drop(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("drop", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            drop: drop
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
