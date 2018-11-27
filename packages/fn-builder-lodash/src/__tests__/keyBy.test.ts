import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import keyBy from "../keyBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const keyBy = fn.keyBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = keyBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("keyBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            keyBy: keyBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
