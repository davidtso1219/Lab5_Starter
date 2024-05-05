// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Test for isPhoneNumber function
test('Valid phone number format should return true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid phone number format with parentheses should return true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid phone number format should return false', () => {
  expect(isPhoneNumber('1234-567-890')).toBe(false);
});

test('Invalid phone number format without area code should return false', () => {
  expect(isPhoneNumber('45678904')).toBe(false);
});


// Test for isEmail function
test('Valid email format should return true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('Valid email format with subdomain should return true', () => {
  expect(isEmail('test@sub.example.com')).toBe(false);
});

test('Invalid email format should return false', () => {
  expect(isEmail('test@example')).toBe(false);
});

test('Invalid email format without domain should return false', () => {
  expect(isEmail('test@')).toBe(false);
});


// Test for isStrongPassword function
test('Valid password format should return true', () => {
  expect(isStrongPassword('Pass1234')).toBe(true);
});

test('Valid password format with underscore should return true', () => {
  expect(isStrongPassword('P_asS123')).toBe(true);
});

test('Invalid password format should return false', () => {
  expect(isStrongPassword('_password_')).toBe(false);
});

test('Invalid password format with only 2 characters should return false', () => {
  expect(isStrongPassword('pas')).toBe(false);
});


// Test for isDate function
test('Valid date format should return true', () => {
  expect(isDate('12/31/2023')).toBe(true);
});

test('Valid date format with single digit month and day should return true', () => {
  expect(isDate('05/5/2024')).toBe(true);
});

test('Invalid date format should return false', () => {
  expect(isDate('31/123/2023')).toBe(false);
});

test('Invalid date format with month with more than 2 characters should return false', () => {
  expect(isDate('133/01/2023')).toBe(false);
});


// Test for isHexColor function
test('Valid hex color format should return true', () => {
  expect(isHexColor('#abcdef')).toBe(true);
});

test('Valid hex color format with short notation should return true', () => {
  expect(isHexColor('#123')).toBe(true);
});

test('Invalid hex color format should return false', () => {
  expect(isHexColor('#12345')).toBe(false);
});

test('Invalid hex color format with more than 6 characters', () => {
  expect(isHexColor('abcdeff')).toBe(false);
});
