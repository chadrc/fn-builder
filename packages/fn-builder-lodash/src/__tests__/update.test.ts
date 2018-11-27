import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import update from "../update";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const update = fn.update();

    const input = ['a', 'b', 'c', 'd'];
    const output = update(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("update", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            update: update
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
