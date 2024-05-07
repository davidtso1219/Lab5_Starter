// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//Phone number T test 1
test('test whether (123)-456-7890 is a valid number', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});
//Phone number T test 2
test('test whether 123-456-7890 is a valid number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
//Phone number F test 1
test('test whether 1 is a valid number', () => {
  expect(isPhoneNumber("1")).toBe(false);
});
//Phone number F test 2
test('test whether 123-456-789 is a valid number', () => {
  expect(isPhoneNumber("123-456-789")).toBe(false);
});

//Email T test 1
test('test whether jotoscano@ucsd.edu is a valid email', () => {
  expect(isEmail("jotoscano@ucsd.edu")).toBe(true);
});
//Email T test 2
test('test whether chadcoder@hotmail.com is a valid email', () => {
  expect(isEmail("chadcoder@hotmail.com")).toBe(true);
});
//Email F test 1
test('test whether emailatgoogle.com is a valid email', () => {
  expect(isEmail("emailatgoogle.com")).toBe(false);
});
//Email F test 2
test('test whether I love reading emails! is a valid email', () => {
  expect(isEmail("I love reading emails!")).toBe(false);
});

//Strong Password T test 1
test('test whether a!!!! is a strong password', () => {
  expect(isStrongPassword("a5trongPass")).toBe(true);
});
//Strong Password T test 2
test('test whether Profe330R is a strong password', () => {
  expect(isStrongPassword("Profe330R")).toBe(true);
});
