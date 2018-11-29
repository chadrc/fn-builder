import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import fromCharCode from "../fromCharCode";
import {FunctionType} from "../functions/fromCharCode";

interface TestFn {
    fromCharCode: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.fromCharCode.fn;
    expect(func1(189, 43, 190, 61)).to.equal("½+¾=");
    expect(func1([189, 43, 190, 61])).to.equal("½+¾=");
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            fromCharCode: fromCharCode
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    // it("can be used with LodashFn", testWithFn(
    //     FnBuilder.from(new LodashFn())
    // ));
});
