import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import entriesIn from "../entriesIn";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const entriesIn = fn.entriesIn();

    const input = ['a', 'b', 'c', 'd'];
    const output = entriesIn(input);

    // expect(output).to.deep.equal([['a', 'b'], ['c', 'd']]);
    throw new Error("Unimplemented");
};

describe("entriesIn", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            entriesIn: entriesIn
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
