import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import setWith from "../setWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const setWith = fn.setWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = setWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("setWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            setWith: setWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
