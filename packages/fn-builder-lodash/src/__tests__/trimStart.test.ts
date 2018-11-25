import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import trimStart from "../trimStart";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const trimStart = fn.trimStart();

    const input = ['a', 'b', 'c', 'd'];
    const output = trimStart(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("trimStart", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            trimStart: trimStart
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
