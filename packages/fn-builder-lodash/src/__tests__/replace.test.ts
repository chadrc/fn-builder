import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import replace from "../replace";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const replace = fn.replace();

    const input = ['a', 'b', 'c', 'd'];
    const output = replace(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("replace", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            replace: replace
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
