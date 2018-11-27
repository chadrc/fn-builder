import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import defer from "../defer";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const defer = fn.defer();

    const input = ['a', 'b', 'c', 'd'];
    const output = defer(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("defer", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            defer: defer
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
