import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import meanBy from "../meanBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const meanBy = fn.meanBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = meanBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("meanBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            meanBy: meanBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
