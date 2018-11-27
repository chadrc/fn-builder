import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import unionBy from "../unionBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const unionBy = fn.unionBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = unionBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("unionBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            unionBy: unionBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
