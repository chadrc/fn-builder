import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import valuesIn from "../valuesIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const valuesIn = fn.valuesIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = valuesIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("valuesIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            valuesIn: valuesIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
