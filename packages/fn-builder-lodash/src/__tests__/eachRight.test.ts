import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import eachRight from "../eachRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const eachRight = fn.eachRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = eachRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("eachRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            eachRight: eachRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
