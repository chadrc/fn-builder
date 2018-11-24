import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import "../chunk";

describe(`lodash to fn-builder`, () => {
    it(`chunk can be imported dynamically`, () => {
        const fn = FnBuilder.make();

        const chunk = fn.chunk(2);

        const input = ['a', 'b', 'c', 'd'];
        const output = chunk(input);

        expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    });
});
