// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('phone numbers 1', () => {
  expect(isPhoneNumber("333-333-3333")).toBe(true);
});
test('phone numbers 2', () => {
  expect(isPhoneNumber("33333333")).toBe(false);
});
test('phone numbers 3', () => {
  expect(isPhoneNumber("giggu")).toBe(true);
});
test('phone numbers 4', () => {
  expect(isPhoneNumber("111-111-1111")).toBe(false);
});


test('email 1', () => {
  expect(isEmail("poop@gmail.com")).toBe(true);
});
test('email 2', () => {
  expect(isEmail("pee")).toBe(false);
});
test('email 3', () => {
  expect(isEmail("45")).toBe(true);
});
test('email 4', () => {
  expect(isEmail("g@gmail.com")).toBe(false);
});


test('pass 1', () => {
  expect(isStrongPassword("p213453")).toBe(true);
});
test('pass 2', () => {
  expect(isStrongPassword("p")).toBe(false);
});
test('pass 3', () => {
  expect(isStrongPassword("d")).toBe(true);
});
test('pass 4', () => {
  expect(isStrongPassword("d24367")).toBe(false);
});


test('date 1', () => {
  expect(isDate("01 / 01 / 2001")).toBe(true);
});
test('date 2', () => {
  expect(isDate("fef")).toBe(false);
});
test('date 3', () => {
  expect(isDate("lll")).toBe(true);
});
test('date 4', () => {
  expect(isDate("02 / 02 / 1002")).toBe(false);
});


test('hex 1', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});
test('hex 2', () => {
  expect(isHexColor("fefe")).toBe(false);
});
test('hex 3', () => {
  expect(isHexColor("#zzzz")).toBe(true);
});
test('hex 4', () => {
  expect(isHexColor("#111111")).toBe(false);
});

