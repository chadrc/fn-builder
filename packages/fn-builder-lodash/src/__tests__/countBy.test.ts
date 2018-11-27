import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import countBy from "../countBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const countBy = fn.countBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = countBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("countBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            countBy: countBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
