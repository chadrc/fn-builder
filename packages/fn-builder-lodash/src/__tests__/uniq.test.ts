import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import uniq from "../uniq";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const uniq = fn.uniq();

    const input = ['a', 'b', 'c', 'd'];
    const output = uniq(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("uniq", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            uniq: uniq
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
