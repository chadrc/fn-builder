import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import localeCompare from "../localeCompare";
import {FunctionType} from "../functions/localeCompare";

interface TestFn {
    localeCompare: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    var a = 'réservé';
    var b = 'RESERVE';

    const func1 = fn.localeCompare(b).fn;
    expect(func1(a)).to.equal(1);

    const func2 = fn.localeCompare(b, 'en', {sensitivity: 'base'}).fn;
    expect(func2(a)).to.equal(0);
};

describe("localeCompare", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            localeCompare: localeCompare
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
