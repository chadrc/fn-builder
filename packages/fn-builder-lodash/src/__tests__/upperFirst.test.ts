import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import upperFirst from "../upperFirst";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const upperFirst = fn.upperFirst();

    const input = ['a', 'b', 'c', 'd'];
    const output = upperFirst(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("upperFirst", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            upperFirst: upperFirst
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
