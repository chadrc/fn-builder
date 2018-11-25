import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import startCase from "../startCase";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const startCase = fn.startCase();

    const input = ['a', 'b', 'c', 'd'];
    const output = startCase(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("startCase", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            startCase: startCase
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
