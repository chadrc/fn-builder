import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stubFalse from "../stubFalse";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const stubFalse = fn.stubFalse();

    const input = ['a', 'b', 'c', 'd'];
    const output = stubFalse(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("stubFalse", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stubFalse: stubFalse
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
