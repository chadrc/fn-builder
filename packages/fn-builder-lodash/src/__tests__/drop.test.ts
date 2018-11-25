import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import drop from "../drop";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const drop = fn.drop();
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);

    const drop2 = fn.drop(2);
    expect(drop2([1, 2, 3])).to.deep.equal([3]);

    const drop3 = fn.drop(5);
    expect(drop3([1, 2, 3])).to.deep.equal([]);

    const drop4 = fn.drop(0);
    expect(drop4([1, 2, 3])).to.deep.equal([1, 2, 3]);
};

describe("drop", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            drop: drop
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
