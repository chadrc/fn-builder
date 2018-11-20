import * as Fn from "../index";
import {expect} from 'chai';
import 'jest';

interface MathFn {
    add(num: number): (value: number) => number
}

describe(`Interface tests`, () => {
    it(`Can create Fn instance`, () => {
        Fn.make();
    });

    it(`Can add method to Fn instance`, () => {
        const fn = Fn.make<MathFn>();

        fn.add = (num: number) => (value: number) => value + num;
    });

    it(`Can create Fn with object`, () => {
        Fn.make({
            add: (num: number) => (value: number) => value + num
        });
    })
});
