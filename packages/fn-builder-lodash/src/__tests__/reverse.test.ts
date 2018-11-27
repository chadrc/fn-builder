import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import reverse from "../reverse";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const reverse = fn.reverse();

    const input = ['a', 'b', 'c', 'd'];
    const output = reverse(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("reverse", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            reverse: reverse
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
