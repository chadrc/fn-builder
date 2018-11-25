import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import sortedUniqBy from "../sortedUniqBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const sortedUniqBy = fn.sortedUniqBy();

    const input = ['a', 'b', 'c', 'd'];
    const output = sortedUniqBy(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("sortedUniqBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            sortedUniqBy: sortedUniqBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
