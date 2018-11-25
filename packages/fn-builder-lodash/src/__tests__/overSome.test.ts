import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import overSome from "../overSome";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const overSome = fn.overSome();

    const input = ['a', 'b', 'c', 'd'];
    const output = overSome(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("overSome", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            overSome: overSome
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});