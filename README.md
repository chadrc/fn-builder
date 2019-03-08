# Fn Builder
Utility for composing functions using a builder pattern.

## Usage

```typescript
import FnBuilder from "fn-builder";

// Define our functions to be composed
// Can be as a class like here or just a plain object
class TestFn {
    valuesInRange = (min: number, max: number) => 
        (ary: number[]) => 
            ary.filter((x) => min <= x && x <= max);

    sum = (values: number[]) => values.reduce((prev, curr) => prev + curr, 0);
}

// create the builder
const fnBuilder = FnBuilder.from(new TestFn());

const input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// compose functions

// single function
// .fn ends the build and returns a function
const fiveThroughTen = fnBuilder.valuesInRange(5, 10).fn; 
console.log(fiveThroughTen(input)); // [6, 8, 10]

const sumOfFiveThroughTen = fnBuilder.valuesInRange(5, 10).sum.fn;
console.log(sumOfFiveThroughTen(input)); // 24
```
