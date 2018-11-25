import * as FnBuilder from "../index";
import {expect} from 'chai';
import 'jest';
import "./dynamicMulFunction";
import {MyDynamicFn} from "./MyDynamicFn";

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
        const fnBuilder = FnBuilder.make();

        FnBuilder.addDynamic("add", (num: number) => (value: number) => value + num);

        const add3 = fnBuilder.add(3).fn;

        expect(add3(4)).to.equal(7);
    });

    it(`Can use imported dynamic function`, () => {
        const fnBuilder = FnBuilder.make();

        const mul4 = fnBuilder.mul(4).fn;

        expect(mul4(5)).to.equal(20);
    });

    it(`Can extend DynamicFn`, () => {
        const fnBuilder = FnBuilder.from(new MyDynamicFn());

        const mul3_sub8 = fnBuilder.mul(3).subtract(8).fn;

        expect(mul3_sub8(5)).to.equal(7);
    });

    it(`Can make DynamicFn with options`, () => {
        const fnBuilder = FnBuilder.make({
            useArgValuesInName: true
        });

        const mul3Name = FnBuilder.nameOf(fnBuilder.mul(3));

        expect(mul3Name).to.equal("mul(3)(__input__)");
    });
});
