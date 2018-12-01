export class TestFn {
    addValues = (num1: number, num2: number) => num1 + num2;
    add = (num: number) => (value: number) => value + num;
    mul = (num: number) => (value: number) => value * num;
    valuesInRange = (min: number, max: number) => (ary: number[]) => ary.filter((x) => min <= x && x <= max);

    precisionDiv = (decimal: number) => (denominator: number) => (numerator: number) => (numerator / denominator).toFixed(decimal);
    sum = (values: number[]) => values.reduce((prev, curr) => prev + curr, 0);
    avg = (values: number[]) => this.sum(values) / values.length;
    inc = (value: number) => ++value;

    map = (mapper: (num: any) => any) => (value: number): any[] => mapper(value);

    context = (obj: {[key: string]: any}) => (prop: string) => obj[prop];

    add3 = this.add(3);
    mul2 = this.mul(2);
}