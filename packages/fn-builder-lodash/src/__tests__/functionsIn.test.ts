import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import functionsIn from "../functionsIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const functionsIn = fn.functionsIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = functionsIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("functionsIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            functionsIn: functionsIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
