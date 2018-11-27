import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import bind from "../bind";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const bind = fn.bind();

    const input = ['a', 'b', 'c', 'd'];
    const output = bind(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("bind", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            bind: bind
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
