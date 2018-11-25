import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import forOwnRight from "../forOwnRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const forOwnRight = fn.forOwnRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = forOwnRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("forOwnRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            forOwnRight: forOwnRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
