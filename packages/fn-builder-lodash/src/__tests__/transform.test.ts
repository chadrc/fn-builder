import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import transform from "../transform";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const transform = fn.transform();

    const input = ['a', 'b', 'c', 'd'];
    const output = transform(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("transform", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            transform: transform
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
