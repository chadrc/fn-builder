import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import inRange from "../inRange";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const inRange = fn.inRange();

    const input = ['a', 'b', 'c', 'd'];
    const output = inRange(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("inRange", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            inRange: inRange
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
