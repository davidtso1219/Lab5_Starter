// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('Valid phone number format', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number with area code', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

// Test cases that should return false
test('Invalid phone number format', () => {
  expect(isPhoneNumber('1234-567-890')).toBe(false);
});

test('Invalid phone number with missing digits', () => {
  expect(isPhoneNumber('123-456-789')).toBe(false);
});

test('Valid email address', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Valid email address with underscore', () => {
  expect(isEmail('test_user@example.com')).toBe(true);
});

// Test cases that should return false
test('Invalid email address without @', () => {
  expect(isEmail('testexample.com')).toBe(false);
});

test('Invalid email address with invalid domain', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('Valid strong password', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('Valid strong password with underscore', () => {
  expect(isStrongPassword('Pass_word123')).toBe(true);
});

// Test cases that should return false
test('Invalid weak password with too few characters', () => {
  expect(isStrongPassword('P1')).toBe(false);
});

test('Invalid weak password with invalid characters', () => {
  expect(isStrongPassword('Password$123')).toBe(false);
});

test('Valid date format', () => {
  expect(isDate('12/25/2021')).toBe(true);
});

test('Valid date with single digit day and month', () => {
  expect(isDate('1/5/2021')).toBe(true);
});

// Test cases that should return false
test('Invalid date format with missing year', () => {
  expect(isDate('12/25')).toBe(false);
});

test('Invalid date format with invalid month', () => {
  expect(isDate('127/25/2021')).toBe(false);
});


test('Valid hex color code', () => {
  expect(isHexColor('#ff0000')).toBe(true);
});

test('Valid short hex color code', () => {
  expect(isHexColor('#0f0')).toBe(true);
});

// Test cases that should return false
test('Invalid hex color code with missing hash', () => {
  expect(isHexColor('ff00009ecfefc')).toBe(false);
});

test('Invalid hex color code with invalid characters', () => {
  expect(isHexColor('#xyz123')).toBe(false);
});


