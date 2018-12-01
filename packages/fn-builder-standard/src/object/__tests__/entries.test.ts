import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import entries from "../entries";
import {FunctionType} from "../functions/entries";

interface TestFn {
    entries: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const obj = {
        value1: "value1",
        value2: 800,
        value3: true
    };

    const func1 = fn.entries.fn;
    expect(func1(obj)).to.deep.equal([
        ["value1", "value1"],
        ["value2", 800],
        ["value3", true]
    ]);
};

describe("entries", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            entries: entries
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
