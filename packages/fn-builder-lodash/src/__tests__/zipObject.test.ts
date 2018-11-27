import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import zipObject from "../zipObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const zipObject = fn.zipObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = zipObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("zipObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            zipObject: zipObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
