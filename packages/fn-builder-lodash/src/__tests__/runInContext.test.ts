import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import runInContext from "../runInContext";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const runInContext = fn.runInContext();

    const input = ['a', 'b', 'c', 'd'];
    const output = runInContext(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("runInContext", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            runInContext: runInContext
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
