import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import truncate from "../truncate";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const truncate = fn.truncate();

    const input = ['a', 'b', 'c', 'd'];
    const output = truncate(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("truncate", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            truncate: truncate
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
