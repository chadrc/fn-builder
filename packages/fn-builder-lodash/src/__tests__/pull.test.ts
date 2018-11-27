import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import pull from "../pull";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const pull = fn.pull();

    const input = ['a', 'b', 'c', 'd'];
    const output = pull(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("pull", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            pull: pull
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
