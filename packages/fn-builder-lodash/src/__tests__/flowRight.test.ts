import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flowRight from "../flowRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const flowRight = fn.flowRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = flowRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flowRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flowRight: flowRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
