import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pickBy from "../pickBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const pickBy = fn.pickBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = pickBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pickBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pickBy: pickBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
