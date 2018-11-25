import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import "../concat";
import concatFunction from "../functions/concat";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const concat = fn.concat(2, [3], [[4]]);

    const input = [1];
    const output = concat(input);

    expect(output).to.deep.equal([1, 2, 3, [4]]);
};

describe(`concat`, () => {
    it(`can be included in custom Fn object`, testWithFn(
        FnBuilder.from({
            concat: concatFunction
        })
    ));

    it(`can be imported dynamically`, testWithFn(
        FnBuilder.make()
    ));

    it(`can be used with LodashFn`, testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
