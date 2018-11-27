import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import partial from "../partial";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const partial = fn.partial();

    const input = ['a', 'b', 'c', 'd'];
    const output = partial(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("partial", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            partial: partial
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
