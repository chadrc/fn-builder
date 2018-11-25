import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import delay from "../delay";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const delay = fn.delay();

    const input = ['a', 'b', 'c', 'd'];
    const output = delay(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("delay", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            delay: delay
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
