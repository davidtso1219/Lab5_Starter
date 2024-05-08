// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('trueph1', () => {
  expect(isPhoneNumber("146-582-5926")).toBe(true);
});

test('trueph2', () => {
  expect(isPhoneNumber("856-305-2947")).toBe(true);
});

test('falseph1', () => {
  expect(isPhoneNumber("738")).toBe(false);
});

test('falseph2', () => {
  expect(isPhoneNumber("fr44")).toBe(false);
});


test('truee1', () => {
  expect(isEmail("email@gmail.com")).toBe(true);
});

test('truee2', () => {
  expect(isEmail("email@ucsd.edu")).toBe(true);
});

test('flasee1', () => {
  expect(isEmail("wrongemail")).toBe(false);
});

test('flasee2', () => {
  expect(isEmail("432")).toBe(false);
});


test('truesp1', () => {
  expect(isStrongPassword("vnNEoi94_e32cew")).toBe(true);
});

test('truesp2', () => {
  expect(isStrongPassword("nvjreHU67_njwJ")).toBe(true);
});

test('falsesp1', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('falsesp2', () => {
  expect(isStrongPassword("123")).toBe(false);
});


test('trued1', () => {
  expect(isDate("5/7/2024")).toBe(true);
});

test('trued2', () => {
  expect(isDate("1/15/1996")).toBe(true);
});

test('falsed1', () => {
  expect(isDate("555/5555")).toBe(false);
});

test('falsed2', () => {
  expect(isDate("123")).toBe(false);
});


test('truehc1', () => {
  expect(isHexColor("#473856")).toBe(true);
});

test('truehc2', () => {
  expect(isHexColor("#729462")).toBe(true);
});

test('falsehc1', () => {
  expect(isHexColor("#abcdefg")).toBe(false);
});

test('falsehc1', () => {
  expect(isHexColor("1234")).toBe(false);
});
