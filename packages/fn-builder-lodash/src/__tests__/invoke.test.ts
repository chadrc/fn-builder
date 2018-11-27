import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import invoke from "../invoke";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const invoke = fn.invoke();

    const input = ['a', 'b', 'c', 'd'];
    const output = invoke(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("invoke", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            invoke: invoke
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
