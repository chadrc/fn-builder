import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import attempt from "../attempt";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const attempt = fn.attempt();

    const input = ['a', 'b', 'c', 'd'];
    const output = attempt(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("attempt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            attempt: attempt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
