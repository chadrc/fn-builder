import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import invertBy from "../invertBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const invertBy = fn.invertBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = invertBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("invertBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            invertBy: invertBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
