import {invariant} from "../src"

test('should not throw if condition is truthy.', () => {
  const truthy = [ 1, -1, true, {}, [], Symbol(), 'hi' ];
  truthy.forEach((value) =>
    expect(() => !invariant(value)).toThrow(),
  );
})

test('should throw if the condition is falsy.', () => {
  // https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#falsy-values
  const falsy = [ undefined, null, false, +0, -0, NaN, '' ];
  falsy.forEach((value) => expect(() => invariant(value)).toThrow());
})

