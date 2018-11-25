import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import compact from "../compact";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.Fn<any>) => () => {
    const compact = fn.compact;

    const input = [0, 1, false, 2, '', 3];
    const output = compact(input);

    expect(output).to.deep.equal([1, 2, 3]);
};

describe(`compact`, () => {
    it(`can be included in custom Fn object`, testWithFn(
        FnBuilder.from({
            compact: compact
        })
    ));

    it(`can be imported dynamically`, testWithFn(
        FnBuilder.make()
    ));

    it(`can be used with LodashFn`, testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
