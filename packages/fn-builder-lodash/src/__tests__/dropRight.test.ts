import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropRight from "../dropRight";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const dropRight = fn.dropRight();
    expect(dropRight([1, 2, 3])).to.deep.equal([1, 2]);

    const dropRight2 = fn.dropRight(2);
    expect(dropRight2([1, 2, 3])).to.deep.equal([1]);

    const dropRight3 = fn.dropRight(5);
    expect(dropRight3([1, 2, 3])).to.deep.equal([]);

    const dropRight4 = fn.dropRight(0);
    expect(dropRight4([1, 2, 3])).to.deep.equal([1, 2, 3]);
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
