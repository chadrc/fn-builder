import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import template from "../template";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const template = fn.template();

    const input = ['a', 'b', 'c', 'd'];
    const output = template(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("template", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            template: template
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
