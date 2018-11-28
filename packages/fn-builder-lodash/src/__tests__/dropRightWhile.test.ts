import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import dropRightWhile from "../dropRightWhile";
import LodashFn from "../LodashFn";

const testWithFn = (fn: FnBuilder.FnBuilder<any>) => () => {
    const input = [
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ];

    const dropRightWhile1 = fn.dropRightWhile((o: any) => !o.active).fn;
    const output1 = dropRightWhile1(input);
    expect(output1).to.deep.equal([
        { 'user': 'barney',  'active': true }
    ]);

    const dropRightWhile2 = fn.dropRightWhile({ 'user': 'pebbles', 'active': false }).fn;
    const output2 = dropRightWhile2(input);
    expect(output2).to.deep.equal([
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false }
    ]);

    const dropRightWhile3 = fn.dropRightWhile(['active', false]).fn;
    const output3 = dropRightWhile3(input);
    expect(output3).to.deep.equal([
        { 'user': 'barney',  'active': true }
    ]);

    const dropRightWhile4 = fn.dropRightWhile('active').fn;
    const output4 = dropRightWhile4(input);
    expect(output4).to.deep.equal([
        { 'user': 'barney',  'active': true },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': false }
    ]);
};

describe("dropRightWhile", () => {
    it("can be included in custom Fn object", testWithFn(
        FnBuilder.from({
            dropRightWhile: dropRightWhile
        })
    ));

    it("can be imported dynamically", testWithFn(
        FnBuilder.make()
    ));

    it("can be used with LodashFn", testWithFn(
        FnBuilder.from(new LodashFn())
    ));
});
