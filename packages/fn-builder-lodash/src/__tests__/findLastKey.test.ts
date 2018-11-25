import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import findLastKey from "../findLastKey";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const findLastKey = fn.findLastKey();

    const input = ['a', 'b', 'c', 'd'];
    const output = findLastKey(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("findLastKey", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            findLastKey: findLastKey
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
