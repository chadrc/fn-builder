import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import "./dynamicMulFunction";
import {MyDynamicFn} from "./MyDynamicFn";
import {DynamicFn} from "../DynamicFn";

declare module "../DynamicFn" {
    interface DynamicFn {
        add(num: number): (value: number) => number
    }
}

describe(`Importing functions in a DynamicFn`, () => {
    it(`Can create instance`, () => {
        FnBuilder.make();
    });

    it(`Can add function to DynamicFn`, () => {
        const fn = FnBuilder.make();

        FnBuilder.addDynamic("add", (num: number) => (value: number) => value + num);

        const add3 = fn.add(3);

        expect(add3(4)).to.equal(7);
    });

    it(`Can use imported dynamic function`, () => {
        const fn = FnBuilder.make();

        const mul4 = fn.mul(4);

        expect(mul4(5)).to.equal(20);
    });

    it(`Can extend DynamicFn`, () => {
        const fn = FnBuilder.from(new MyDynamicFn());

        const mul3_sub8 = fn.mul(3).subtract(8);

        expect(mul3_sub8(5)).to.equal(7);
    });

    it(`Can make DynamicFn with options`, () => {
        const fn = FnBuilder.make({
            useArgValuesInName: true
        });

        const mul3Name = FnBuilder.nameOf(fn.mul(3));

        expect(mul3Name).to.equal("mul(3)(__input__)");
    });
});
