import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unionWith from "../unionWith";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const unionWith = fn.unionWith();

    const input = ['a', 'b', 'c', 'd'];
    const output = unionWith(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unionWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unionWith: unionWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
