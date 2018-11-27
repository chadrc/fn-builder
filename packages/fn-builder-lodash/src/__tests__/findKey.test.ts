import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import findKey from "../findKey";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const findKey = fn.findKey();

    const input = ['a', 'b', 'c', 'd'];
    const output = findKey(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("findKey", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            findKey: findKey
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
