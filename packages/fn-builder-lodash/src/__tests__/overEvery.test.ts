import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import overEvery from "../overEvery";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const overEvery = fn.overEvery();

    const input = ['a', 'b', 'c', 'd'];
    const output = overEvery(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("overEvery", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            overEvery: overEvery
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
