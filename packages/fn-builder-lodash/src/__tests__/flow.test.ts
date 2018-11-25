import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import flow from "../flow";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const flow = fn.flow();

    const input = ['a', 'b', 'c', 'd'];
    const output = flow(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("flow", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            flow: flow
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
