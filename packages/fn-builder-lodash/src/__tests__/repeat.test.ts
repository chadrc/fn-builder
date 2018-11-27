import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import repeat from "../repeat";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const repeat = fn.repeat();

    const input = ['a', 'b', 'c', 'd'];
    const output = repeat(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("repeat", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            repeat: repeat
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
