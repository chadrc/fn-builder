import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import bindKey from "../bindKey";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const bindKey = fn.bindKey();

    const input = ['a', 'b', 'c', 'd'];
    const output = bindKey(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("bindKey", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            bindKey: bindKey
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
