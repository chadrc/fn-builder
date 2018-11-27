import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import floor from "../floor";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const floor = fn.floor();

    const input = ['a', 'b', 'c', 'd'];
    const output = floor(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("floor", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            floor: floor
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
