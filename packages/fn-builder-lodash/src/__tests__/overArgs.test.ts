import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import overArgs from "../overArgs";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const overArgs = fn.overArgs();

    const input = ['a', 'b', 'c', 'd'];
    const output = overArgs(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("overArgs", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            overArgs: overArgs
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
