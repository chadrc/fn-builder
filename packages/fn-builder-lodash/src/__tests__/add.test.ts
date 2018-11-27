import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import add from "../add";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const add = fn.add(4);

    const input = 6;
    const output = add(input);

    expect(output).to.deep.equal(10);
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
