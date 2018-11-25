import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assign from "../assign";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const assign = fn.assign();

    const input = ['a', 'b', 'c', 'd'];
    const output = assign(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("assign", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assign: assign
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
