import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLower from "../toLower";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const toLower = fn.toLower();

    const input = ['a', 'b', 'c', 'd'];
    const output = toLower(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("toLower", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            toLower: toLower
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
