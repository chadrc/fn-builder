import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import zip from "../zip";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const zip = fn.zip();

    const input = ['a', 'b', 'c', 'd'];
    const output = zip(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("zip", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            zip: zip
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
