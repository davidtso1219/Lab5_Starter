// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('isPhoneNumber 1', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
})
test('isPhoneNumber 2', () => {
  expect(isPhoneNumber("415-273-9164")).toBe(true);
})
test('isPhoneNumber 3', () => {
  expect(isPhoneNumber("(123)4567890")).toBe(false);
})
test('isPhoneNumber 4', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
})

test('isEmail 1', () => {
  expect(isEmail("wilburtonks@gmail.com")).toBe(true);
})
test('isEmail 2', () => {
  expect(isEmail("snowden@protonmail.com")).toBe(true);
})
test('isEmail 3', () => {
  expect(isEmail("larry@")).toBe(false);
})
test('isEmail 4', () => {
  expect(isEmail("california@hotel")).toBe(false);
})

test('isStrongPassword 1', () => {
  expect(isStrongPassword("correcth_bttery")).toBe(true);
})
test('isStrongPassword 2', () => {
  expect(isStrongPassword("hOrSeBaTt3_lE")).toBe(true);
})
test('isStrongPassword 3', () => {
  expect(isStrongPassword("3password")).toBe(false);
})
test('isStrongPassword 4', () => {
  expect(isStrongPassword("correcthorsebatterystaple")).toBe(false);
})

test('isDate 1', () => {
  expect(isDate("4/20/1969")).toBe(true);
})
test('isDate 2', () => {
  expect(isDate("12/2/1969")).toBe(true);
})
test('isDate 3', () => {
  expect(isDate("12/2/69")).toBe(false);
})
test('isDate 4', () => {
  expect(isDate("4/212/1980")).toBe(false);
})

test('isHexColor 1', () => {
  expect(isHexColor("#aaA")).toBe(true);
})
test('isHexColor 2', () => {
  expect(isHexColor("#09Af1A")).toBe(true);
})
test('isHexColor 3', () => {
  expect(isHexColor("#a111")).toBe(false);
})
test('isHexColor 4', () => {
  expect(isHexColor("rgba(0,1,2,3)")).toBe(false);
})
