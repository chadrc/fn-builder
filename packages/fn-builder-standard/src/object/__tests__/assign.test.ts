import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import assign from "../assign";
import {FunctionType} from "../functions/assign";

interface TestFn {
    assign: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const func1 = fn.assign([{value2: "value2"}, {value3: 800}]).fn;

    expect(func1({value1: true})).to.deep.equal({
        value1: true,
        value2: "value2",
        value3: 800
    });
};

describe("assign", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            assign: assign
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));
});
