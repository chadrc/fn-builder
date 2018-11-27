import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import debounce from "../debounce";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const debounce = fn.debounce();

    const input = ['a', 'b', 'c', 'd'];
    const output = debounce(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("debounce", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            debounce: debounce
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
