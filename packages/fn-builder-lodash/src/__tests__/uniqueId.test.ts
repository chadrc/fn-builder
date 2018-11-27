import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import uniqueId from "../uniqueId";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const uniqueId = fn.uniqueId();

    const input = ['a', 'b', 'c', 'd'];
    const output = uniqueId(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("uniqueId", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            uniqueId: uniqueId
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
