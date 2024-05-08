// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('right number 1', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});
test('right number 2', () => {
  expect(isPhoneNumber("(987) 654-3210")).toBe(true);
});
test('7 number false', () => {
  expect(isPhoneNumber("1234567")).toBe(false);
});
test('10 number false', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});


test('right Email 1', () => {
  expect(isEmail("abc123@gmail.com")).toBe(true);
});
test('right Email 2', () => {
  expect(isEmail("123acd@qq.com")).toBe(true);
});
test('not Email 1', () => {
  expect(isEmail("@gmail.com")).toBe(false);
});
test('not Email 1', () => {
  expect(isStrongPassword("abc123@ucsd")).toBe(false);
});

test('is Strong Password 1', () => {
  expect(isStrongPassword("A_bA123")).toBe(true);
});
test('is Strong Password 2', () => {
  expect(isStrongPassword("b123")).toBe(true);
});
test('not Strong Password 1', () => {
  expect(isStrongPassword("A13")).toBe(false);
});
test('not Strong Password 2', () => {
  expect(isStrongPassword("ASDGFHKWU6183749")).toBe(false);
});

test('is Date 1', () => {
  expect(isDate("5/7/2024")).toBe(true);
});
test('is Date 2', () => {
  expect(isDate("06/21/2025")).toBe(true);
});
test('not Date 1', () => {
  expect(isDate("12/21")).toBe(false);
});
test('not Date 2', () => {
  expect(isDate("12/2022")).toBe(false);
});

test('is Hex Color 1', () => {
  expect(isHexColor("#123acd")).toBe(true);
});
test('is Hex Color 2', () => {
  expect(isHexColor("123")).toBe(true);
});
test('not Hex Color 1', () => {
  expect(isHexColor("$swr2")).toBe(false);
});
test('not Hex Color 2', () => {
  expect(isHexColor("qsf23")).toBe(false);
});