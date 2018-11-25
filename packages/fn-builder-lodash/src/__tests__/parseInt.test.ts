import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import parseInt from "../parseInt";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const parseInt = fn.parseInt();

    const input = ['a', 'b', 'c', 'd'];
    const output = parseInt(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("parseInt", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            parseInt: parseInt
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
