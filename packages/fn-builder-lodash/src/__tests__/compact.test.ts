import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import "../compact";
import compactFunction from "../functions/compact";

describe(`compact`, () => {
    it(`can be included in custom Fn object`, () => {
        const fn = FnBuilder.from({
            compact: compactFunction
        });

        const compact = fn.compact;

        const input = [0, 1, false, 2, '', 3];
        const output = compact(input);

        expect(output).to.deep.equal([1, 2, 3]);
    });

    it(`can be imported dynamically`, () => {
        const fn = FnBuilder.make();

        const compact = fn.compact;

        const input = [0, 1, false, 2, '', 3];
        const output = compact(input);

        expect(output).to.deep.equal([1, 2, 3]);
    });
});
