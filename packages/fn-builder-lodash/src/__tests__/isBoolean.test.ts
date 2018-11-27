import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isBoolean from "../isBoolean";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isBoolean = fn.isBoolean();

    const input = ['a', 'b', 'c', 'd'];
    const output = isBoolean(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isBoolean", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isBoolean: isBoolean
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
