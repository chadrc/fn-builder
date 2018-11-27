import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import reject from "../reject";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const reject = fn.reject();

    const input = ['a', 'b', 'c', 'd'];
    const output = reject(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("reject", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            reject: reject
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
