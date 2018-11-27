import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import get from "../get";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const get = fn.get();

    const input = ['a', 'b', 'c', 'd'];
    const output = get(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("get", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            get: get
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
