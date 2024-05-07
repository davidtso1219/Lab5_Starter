// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Test cases for isPhoneNumber
describe('isPhoneNumber', () => {
  test('validates correct phone number "123-456-7890"', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('validates correct phone number "(123) 456-7890"', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('rejects incorrect phone number "12345-67890"', () => {
    expect(isPhoneNumber('12345-67890')).toBe(false);
  });
  test('rejects incomplete phone number "456-7890"', () => {
    expect(isPhoneNumber('456-7890')).toBe(false);
  });
});

// Test cases for isEmail
describe('isEmail', () => {
  test('validates correct email "email@example.com"', () => {
    expect(isEmail('email@example.com')).toBe(true);
  });
  test('validates correct email "user.name@domain.com"', () => {
    expect(isEmail('user.name@domain.com')).toBe(true);
  });
  test('rejects invalid email "email.com"', () => {
    expect(isEmail('email.com')).toBe(false);
  });
  test('rejects invalid email "@example.com"', () => {
    expect(isEmail('@example.com')).toBe(false);
  });
});

// Test cases for isStrongPassword
describe('isStrongPassword', () => {
  test('validates strong password "Abc1234"', () => {
    expect(isStrongPassword('Abc1234')).toBe(true);
  });
  test('validates strong password "A1_b"', () => {
    expect(isStrongPassword('A1_b')).toBe(true);
  });
  test('rejects weak password "abc"', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });
  test('rejects overly long password "1234567890123456"', () => {
    expect(isStrongPassword('1234567890123456')).toBe(false);
  });
});

// Test cases for isDate
describe('isDate', () => {
  test('validates correct date "12/25/2021"', () => {
    expect(isDate('12/25/2021')).toBe(true);
  });
  test('validates correct date "1/1/2020"', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('rejects incorrect date format "25/12/2021"', () => {
    expect(isDate('25/12/2021')).toBe(false);
  });
  test('rejects invalid date "02/30/2020"', () => {
    expect(isDate('02/30/2020')).toBe(false);
  });
});

// Test cases for isHexColor
describe('isHexColor', () => {
  test('validates correct hex color "#FFF"', () => {
    expect(isHexColor('#FFF')).toBe(true);
  });
  test('validates correct hex color "#123ABC"', () => {
    expect(isHexColor('#123ABC')).toBe(true);
  });
  test('rejects invalid hex color "123456"', () => {
    expect(isHexColor('123456')).toBe(false);
  });
  test('rejects incorrect hex color "#XYZ123"', () => {
    expect(isHexColor('#XYZ123')).toBe(false);
  });
});
