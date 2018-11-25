import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import "../chunk";
import chunkFunction from "../functions/chunk";
import {Fn} from "fn-builder/types";

const testWithFn = (fn: Fn<any>) => () => {
    const chunk = fn.chunk(2);

    const input = ['a', 'b', 'c', 'd'];
    const output = chunk(input);

    expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
};

describe(`chunk`, () => {
    it(`can be included in custom Fn object`, testWithFn(
        FnBuilder.from({
            chunk: chunkFunction
        })
    ));

    it(`can be imported dynamically`, testWithFn(
        FnBuilder.make()
    ));
});
