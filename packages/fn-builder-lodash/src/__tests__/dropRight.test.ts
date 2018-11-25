import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropRight from "../dropRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const dropRight = fn.dropRight();

    const input = ['a', 'b', 'c', 'd'];
    const output = dropRight(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("dropRight", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            dropRight: dropRight
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
