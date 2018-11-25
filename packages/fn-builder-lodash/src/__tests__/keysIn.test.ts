import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import keysIn from "../keysIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const keysIn = fn.keysIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = keysIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("keysIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            keysIn: keysIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});