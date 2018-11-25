import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import differenceWith from "../differenceWith";
import LodashFn from "../LodashFn";
import * as _ from "lodash";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const differenceWith = fn.differenceWith([{ 'x': 1, 'y': 2 }], _.isEqual);

    const output = differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]);

    expect(output).to.deep.equal([{ 'x': 2, 'y': 1 }]);
};

describe("differenceWith", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            differenceWith: differenceWith
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
