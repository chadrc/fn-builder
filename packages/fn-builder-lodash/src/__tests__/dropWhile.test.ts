import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropWhile from "../dropWhile";
import LodashFn from "../LodashFn";
import {FunctionType} from "../functions/dropWhile";

interface TestFn {
    dropWhile: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
    const input = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];

    const dropWhile1 = fn.dropWhile((o: any) => !o.active).fn;
    const output1 = dropWhile1(input);
    expect(output1).to.deep.equal([
        { 'user': 'pebbles',  'active': true }
    ]);

    const dropWhile2 = fn.dropWhile({ 'user': 'barney', 'active': false }).fn;
    const output2 = dropWhile2(input);
    expect(output2).to.deep.equal([
        { 'user': 'fred',       'active': false },
        { 'user': 'pebbles',    'active': true }
    ]);

    const dropWhile3 = fn.dropWhile(['active', false]).fn;
    const output3 = dropWhile3(input);
    expect(output3).to.deep.equal([
        { 'user': 'pebbles',    'active': true }
    ]);

    const dropWhile4 = fn.dropWhile('active').fn;
    const output4 = dropWhile4(input);
    expect(output4).to.deep.equal([
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ]);
};

describe("dropWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            dropWhile: dropWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
