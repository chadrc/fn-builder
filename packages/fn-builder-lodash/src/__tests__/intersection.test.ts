import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import intersection from "../intersection";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const intersection = fn.intersection();

    const input = ['a', 'b', 'c', 'd'];
    const output = intersection(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("intersection", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            intersection: intersection
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
