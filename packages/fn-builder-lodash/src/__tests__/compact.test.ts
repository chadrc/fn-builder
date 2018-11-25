import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import {Fn} from "fn-builder/types";
import "../compact";
import compactFunction from "../functions/compact";

const testWithFn = (fn: Fn<any>) => () => {
    const compact = fn.compact;

    const input = [0, 1, false, 2, '', 3];
    const output = compact(input);

    expect(output).to.deep.equal([1, 2, 3]);
};

describe(`compact`, () => {
    it(`can be included in custom Fn object`, testWithFn(
        FnBuilder.from({
            compact: compactFunction
        })
    ));

    it(`can be imported dynamically`, testWithFn(
        FnBuilder.make()
    ));
});
