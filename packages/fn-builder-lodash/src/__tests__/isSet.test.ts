import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isSet from "../isSet";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const isSet = fn.isSet();

    const input = ['a', 'b', 'c', 'd'];
    const output = isSet(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isSet", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isSet: isSet
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
