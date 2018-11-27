import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import zipObjectDeep from "../zipObjectDeep";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const zipObjectDeep = fn.zipObjectDeep();

    const input = ['a', 'b', 'c', 'd'];
    const output = zipObjectDeep(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("zipObjectDeep", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            zipObjectDeep: zipObjectDeep
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
