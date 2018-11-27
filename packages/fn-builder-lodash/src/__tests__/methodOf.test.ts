import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import methodOf from "../methodOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const methodOf = fn.methodOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = methodOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("methodOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            methodOf: methodOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
