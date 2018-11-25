import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import chunk from "../chunk";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const chunk = fn.chunk(2);

    const input = ['a', 'b', 'c', 'd'];
    const output = chunk(input);

    expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
};

describe(`chunk`, () => {
    it(`can be included in custom Fn object`, testWithFn(
        FnBuilder.from({
            chunk: chunk
        })
    ));

    it(`can be imported dynamically`, testWithFn(
        FnBuilder.make()
    ));

    it(`can be used with LodashFn`, testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
