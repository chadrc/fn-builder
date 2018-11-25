import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forInRight from "../forInRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const forInRight = fn.forInRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = forInRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forInRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forInRight: forInRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
