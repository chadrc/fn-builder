import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import result from "../result";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const result = fn.result();

    const input = ['a', 'b', 'c', 'd'];
    const output = result(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("result", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            result: result
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
