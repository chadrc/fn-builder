import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import join from "../join";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const join = fn.join();

    const input = ['a', 'b', 'c', 'd'];
    const output = join(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("join", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            join: join
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
