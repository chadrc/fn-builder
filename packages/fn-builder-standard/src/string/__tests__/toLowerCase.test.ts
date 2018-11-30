import {expect} from 'chai';
import 'jest';
import * as FnBuilder from "fn-builder";
import toLowerCase from "../toLowerCase";
import {FunctionType} from "../functions/toLowerCase";

interface TestFn {
  toLowerCase: FunctionType
}

const testWithFn = (fn: FnBuilder.FnBuilder<TestFn>) => () => {
  const func1 = fn.toLowerCase.fn;

  expect(func1("HELLO WORLD")).to.equal("hello world");
};

describe("toLowerCase", () => {
  it("can be included in custom Fn object", testWithFn(
    FnBuilder.from({
      toLowerCase: toLowerCase
    })
  ));

  it("can be imported dynamically", testWithFn(
    FnBuilder.make()
  ));
});
