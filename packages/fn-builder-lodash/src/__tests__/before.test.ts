import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import before from "../before";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const before = fn.before();

    const input = ['a', 'b', 'c', 'd'];
    const output = before(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("before", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            before: before
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
