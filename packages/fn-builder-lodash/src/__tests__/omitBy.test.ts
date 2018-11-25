import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import omitBy from "../omitBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const omitBy = fn.omitBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = omitBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("omitBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            omitBy: omitBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
