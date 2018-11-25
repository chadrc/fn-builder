import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import throttle from "../throttle";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const throttle = fn.throttle();

    const input = ['a', 'b', 'c', 'd'];
    const output = throttle(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("throttle", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            throttle: throttle
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
