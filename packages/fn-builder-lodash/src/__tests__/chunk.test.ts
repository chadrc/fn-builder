import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import "../chunk";
import chunkFunction from "../functions/chunk";

describe(`chunk`, () => {
    it(`can be included in custom Fn object`, () => {
        const fn = FnBuilder.from({
            chunk: chunkFunction
        });

        const chunk = fn.chunk(2);

        const input = ['a', 'b', 'c', 'd'];
        const output = chunk(input);

        expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });

    it(`can be imported dynamically`, () => {
        const fn = FnBuilder.make();

        const chunk = fn.chunk(2);

        const input = ['a', 'b', 'c', 'd'];
        const output = chunk(input);

        expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
});
