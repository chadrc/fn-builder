import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import stubObject from "../stubObject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const stubObject = fn.stubObject();

    const input = ['a', 'b', 'c', 'd'];
    const output = stubObject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("stubObject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            stubObject: stubObject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
