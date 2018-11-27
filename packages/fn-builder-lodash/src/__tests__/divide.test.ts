import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import divide from "../divide";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const divide = fn.divide();

    const input = ['a', 'b', 'c', 'd'];
    const output = divide(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("divide", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            divide: divide
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
