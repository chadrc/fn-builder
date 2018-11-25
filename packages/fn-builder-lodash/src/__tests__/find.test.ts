import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import find from "../find";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const find = fn.find();

    const input = ['a', 'b', 'c', 'd'];
    const output = find(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("find", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            find: find
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
