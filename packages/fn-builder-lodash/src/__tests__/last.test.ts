import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import last from "../last";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const last = fn.last();

    const input = ['a', 'b', 'c', 'd'];
    const output = last(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("last", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            last: last
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
