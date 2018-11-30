import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toUpperCase from "../toUpperCase";
import {FunctionType} from "../functions/toUpperCase";

interface TestFn {
  toUpperCase: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
  const func1 = fn.toUpperCase.fn;

  expect(func1("hello world")).to.equal("HELLO WORLD");
};

describe("toUpperCase", () => {
  it("can be included in custom Fn object", testWithFn(
    FnBuilder.from({
      toUpperCase: toUpperCase
    })
  ));

  it("can be imported dynamically", testWithFn(
    FnBuilder.make()
  ));
});
