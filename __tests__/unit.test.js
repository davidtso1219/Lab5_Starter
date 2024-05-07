// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('Correct Number Format 1', () => {
  expect(isPhoneNumber("123-456-7891")).toBe(true);
});

test('Correct Number Format 2', () => {
  expect(isPhoneNumber("(555)-555-5555")).toBe(true);
});

test('Incorrect Number Format 1, inputting number', () => {
  expect(isPhoneNumber(123-456-7891)).toBe(false);
});

test('Incorrect Number Format 2', () => {
  expect(isPhoneNumber("5555555555")).toBe(false);
});

// isEmail
test('Correct Email Format 1', () => {
  expect(isEmail("temporaryemail@gmail.com")).toBe(true);
});

test('Correct Email Format 2', () => {
  expect(isEmail("anotherservice@yahoo.com")).toBe(true);
});

test('Incorrect Email Format 1', () => {
  expect(isEmail("notanemail")).toBe(false);
});

test('Inputting Number', () => {
  expect(isEmail(123)).toBe(false);
});

// isStrongPassword
test('Strong password 1', () => {
  expect(isStrongPassword("Im_Strong123")).toBe(true);
});

test('Strong password 2', () => {
  expect(isStrongPassword("Letter12345__")).toBe(true);
});

test('Weak password 1, first character must be letter', () => {
  expect(isStrongPassword("123firstcharacter_")).toBe(false);
});

test('Weak password 2, less than 4 characters', () => {
  expect(isStrongPassword("sho")).toBe(false);
});

// isDate
test('Correct Date Format 1', () => {
  expect(isDate("01/21/2001")).toBe(true);
});

test('Correct Date Format 2', () => {
  expect(isDate("1/01/2002")).toBe(true);
});

test('Incorrect Date Format 1', () => {
  expect(isDate("2002/01/01")).toBe(false);
});

test('Incorrect Date Format 2', () => {
  expect(isDate("notadate")).toBe(false);
});

// isHexColor
test('Correct Hex Color 1', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('Correct Hex Color 2', () => {
  expect(isHexColor("#ffffff")).toBe(true);
});

test('Incorrect Hex Color 1', () => {
  expect(isHexColor("#FFFFFFFFF")).toBe(false);
});

test('Incorrect Hex Color 2', () => {
  expect(isHexColor("#zzz")).toBe(false);
});