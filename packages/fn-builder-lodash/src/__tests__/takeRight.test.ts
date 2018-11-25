import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import takeRight from "../takeRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const takeRight = fn.takeRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = takeRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("takeRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            takeRight: takeRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
