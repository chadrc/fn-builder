import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLength from "../toLength";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toLength = fn.toLength();

    const input = ['a', 'b', 'c', 'd'];
    const output = toLength(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toLength", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toLength: toLength
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
