import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import minBy from "../minBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const minBy = fn.minBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = minBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("minBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            minBy: minBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
