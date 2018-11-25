import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import identity from "../identity";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const identity = fn.identity();

    const input = ['a', 'b', 'c', 'd'];
    const output = identity(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("identity", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            identity: identity
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});