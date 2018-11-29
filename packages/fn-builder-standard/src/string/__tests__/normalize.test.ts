import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import normalize from "../normalize";
import {FunctionType} from "../functions/normalize";

interface TestFn {
    normalize: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const first = '\u212B';         // "Å"
    const second = '\u0041\u030A';  // "Å"

    const func1 = fn.normalize("NFC").fn;
    const secondNormalized = second.normalize("NFC");
    
    expect(func1(first)).to.equal(secondNormalized);
};

describe("normalize", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            normalize: normalize
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
