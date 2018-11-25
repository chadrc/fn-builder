import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pick from "../pick";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const pick = fn.pick();

    const input = ['a', 'b', 'c', 'd'];
    const output = pick(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pick", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pick: pick
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
