import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import create from "../create";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const create = fn.create();

    const input = ['a', 'b', 'c', 'd'];
    const output = create(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("create", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            create: create
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});