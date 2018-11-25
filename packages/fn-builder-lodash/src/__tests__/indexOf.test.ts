import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import indexOf from "../indexOf";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const indexOf = fn.indexOf();

    const input = ['a', 'b', 'c', 'd'];
    const output = indexOf(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("indexOf", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            indexOf: indexOf
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
