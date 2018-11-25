import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import union from "../union";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const union = fn.union();

    const input = ['a', 'b', 'c', 'd'];
    const output = union(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("union", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            union: union
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
