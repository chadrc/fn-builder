import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import gt from "../gt";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const gt = fn.gt();

    const input = ['a', 'b', 'c', 'd'];
    const output = gt(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("gt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            gt: gt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
