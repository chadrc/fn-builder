import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import maxBy from "../maxBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const maxBy = fn.maxBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = maxBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("maxBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            maxBy: maxBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
