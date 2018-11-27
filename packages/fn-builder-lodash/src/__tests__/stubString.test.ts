import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stubString from "../stubString";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const stubString = fn.stubString();

    const input = ['a', 'b', 'c', 'd'];
    const output = stubString(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("stubString", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stubString: stubString
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
