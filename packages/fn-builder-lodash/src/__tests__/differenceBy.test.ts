import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import differenceBy from "../differenceBy";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const differenceBy = fn.differenceBy([2.3, 3.4], Math.floor).fn;

    const output = differenceBy([2.1, 1.2]);

    expect(output).to.deep.equal([1.2]);

    const differenceByProperty = fn.differenceBy([{ 'x': 1 }], 'x').fn;

    const propOutput = differenceByProperty([{ 'x': 2 }, { 'x': 1 }]);

    expect(propOutput).to.deep.equal([{'x': 2}]);
};

describe("differenceBy", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            differenceBy: differenceBy
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
