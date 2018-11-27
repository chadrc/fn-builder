import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toPlainObject from "../toPlainObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const toPlainObject = fn.toPlainObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = toPlainObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toPlainObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toPlainObject: toPlainObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
