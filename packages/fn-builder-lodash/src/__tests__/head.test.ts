import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import head from "../head";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const head = fn.head();

    const input = ['a', 'b', 'c', 'd'];
    const output = head(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("head", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            head: head
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
