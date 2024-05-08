// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test for isPhoneNumber
// Tests for isPhoneNumber
test('validates correct phone number format with parentheses (true)', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('validates correct phone number format with dashes (true)', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('rejects phone number without dashes (false)', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('rejects incorrectly formatted phone number with extra dashes (false)', () => {
  expect(isPhoneNumber('123-456-78-90')).toBe(false);
});

// Tests for isEmail
test('validates correct email format (true)', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('validates correct email format (true)', () => {
  expect(isEmail('hello1233@subdomain.com')).toBe(true);
});

test('rejects email without "@" symbol (false)', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('rejects email without a domain (false)', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// Tests for isStrongPassword
test('validates strong password with mixed characters (true)', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});

test('validates strong password with underscore (true)', () => {
  expect(isStrongPassword('Zyx1_234')).toBe(true);
});

test('rejects password that is too short (false)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('rejects password that is too long (false)', () => {
  expect(isStrongPassword('1234567890longpassword')).toBe(false);
});

// Tests for isDate
test('validates correct date format with two-digit month and day (true)', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('validates correct date format with one-digit month and day (true)', () => {
  expect(isDate('1/1/1999')).toBe(true);
});

test('rejects date format with three-digit month and day (false)', () => {
  expect(isDate('301/012/2020')).toBe(false);
});

test('rejects date format with hyphens (false)', () => {
  expect(isDate('01-01-2020')).toBe(false);
});

// Tests for isHexColor
test('validates hex color codes with three characters (true)', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('validates hex color codes with six characters (true)', () => {
  expect(isHexColor('#123456')).toBe(true);
});

test('rejects hex codes with valid hex characters (false)', () => {
  expect(isHexColor('TT3456')).toBe(false);
});

test('rejects hex codes with incorrect character count (false)', () => {
  expect(isHexColor('#1234')).toBe(false);
});


