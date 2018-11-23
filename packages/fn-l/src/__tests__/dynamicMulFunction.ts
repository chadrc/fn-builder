import * as FnBuilder from "../";

FnBuilder.addDynamic("mul", (num: number) => (value: number) => num * value);

declare module "../DynamicFn" {
    interface DynamicFn {
        mul(num: number): (value: number) => number
    }
}
