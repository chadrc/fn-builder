import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import uniqBy from "../uniqBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const uniqBy = fn.uniqBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = uniqBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("uniqBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            uniqBy: uniqBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
