import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import conforms from "../conforms";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const conforms = fn.conforms();

    const input = ['a', 'b', 'c', 'd'];
    const output = conforms(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("conforms", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            conforms: conforms
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
