import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import after from "../after";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const after = fn.after();

    const input = ['a', 'b', 'c', 'd'];
    const output = after(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("after", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            after: after
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
