import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toPath from "../toPath";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toPath = fn.toPath();

    const input = ['a', 'b', 'c', 'd'];
    const output = toPath(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toPath", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toPath: toPath
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});