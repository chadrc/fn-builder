import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import isArguments from "../isArguments";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const isArguments = fn.isArguments();

    const input = ['a', 'b', 'c', 'd'];
    const output = isArguments(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("isArguments", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            isArguments: isArguments
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
