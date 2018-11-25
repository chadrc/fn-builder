import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assignIn from "../assignIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const assignIn = fn.assignIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = assignIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("assignIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assignIn: assignIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
