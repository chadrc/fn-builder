import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import add from "../add";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const add = fn.add();

    const input = ['a', 'b', 'c', 'd'];
    const output = add(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("add", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            add: add
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
