import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import {Fn} from "../types";

interface DynamicFn {
    add(num: number): (value: number) => number
}

describe(`Importing functions in a DynamicFn`, () => {
    it(`Can create instance`, () => {
        FnBuilder.make();
    });

    it(`Can add function to DynamicFn`, () => {
        const fn: Fn<DynamicFn> = FnBuilder.make();

        FnBuilder.addDynamic('add', (num: number) => (value: number) => value + num);

        const add3 = fn.add(3);

        expect(add3(4)).to.equal(7);
    });
});
