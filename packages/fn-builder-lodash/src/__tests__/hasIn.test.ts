import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import hasIn from "../hasIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const hasIn = fn.hasIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = hasIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("hasIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            hasIn: hasIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
