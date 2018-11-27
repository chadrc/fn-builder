import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import bindAll from "../bindAll";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const bindAll = fn.bindAll();

    const input = ['a', 'b', 'c', 'd'];
    const output = bindAll(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("bindAll", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            bindAll: bindAll
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
