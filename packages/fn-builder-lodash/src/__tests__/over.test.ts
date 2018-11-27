import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import over from "../over";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const over = fn.over();

    const input = ['a', 'b', 'c', 'd'];
    const output = over(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("over", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            over: over
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
