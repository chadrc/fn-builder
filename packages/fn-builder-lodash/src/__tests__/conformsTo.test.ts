import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import conformsTo from "../conformsTo";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const conformsTo = fn.conformsTo();

    const input = ['a', 'b', 'c', 'd'];
    const output = conformsTo(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("conformsTo", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            conformsTo: conformsTo
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
