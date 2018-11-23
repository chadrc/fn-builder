import {DynamicFn} from "../DynamicFn";

export class MyDynamicFn extends DynamicFn {
    subtract = (num: number) => (value: number) => value - num
}
