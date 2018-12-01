import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import parse from "../parse";
import {FunctionType} from "../functions/parse";

interface TestFn {
    parse: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.parse().fn;

    expect(func1(`{"value1":"value1","value2":453}`)).to.deep.equal({value1: "value1", value2: 453});
};

describe("parse", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            parse: parse
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
