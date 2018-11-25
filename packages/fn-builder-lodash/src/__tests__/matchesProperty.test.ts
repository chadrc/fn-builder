import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import matchesProperty from "../matchesProperty";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const matchesProperty = fn.matchesProperty();

    const input = ['a', 'b', 'c', 'd'];
    const output = matchesProperty(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("matchesProperty", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            matchesProperty: matchesProperty
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
