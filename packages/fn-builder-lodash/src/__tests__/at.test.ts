import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import at from "../at";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const at = fn.at();

    const input = ['a', 'b', 'c', 'd'];
    const output = at(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("at", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            at: at
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
