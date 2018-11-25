import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import functions from "../functions";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const functions = fn.functions();

    const input = ['a', 'b', 'c', 'd'];
    const output = functions(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("functions", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            functions: functions
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});