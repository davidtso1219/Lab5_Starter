// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Tests for isPhoneNumber
describe('isPhoneNumber', () => {
  test('validates correct phone number format', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('validates another correct phone number format', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('rejects incorrect phone number without dashes', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
  test('rejects incorrect phone number with too few digits', () => {
    expect(isPhoneNumber('123-45-6789')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail', () => {
  test('validates correct email format', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('validates another correct email format', () => {
    expect(isEmail('hello.world@domain.co.uk')).toBe(true);
  });
  test('rejects missing domain email', () => {
    expect(isEmail('test@')).toBe(false);
  });
  test('rejects email without "@" symbol', () => {
    expect(isEmail('testexample.com')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword', () => {
  test('validates strong password with special characters', () => {
    expect(isStrongPassword('Example123!')).toBe(true);
  });
  test('validates strong password with underscore', () => {
    expect(isStrongPassword('Strong_Pass1')).toBe(true);
  });
  test('rejects weak password with fewer characters', () => {
    expect(isStrongPassword('examp')).toBe(false);
  });
  test('rejects password without numbers or special characters', () => {
    expect(isStrongPassword('WeakPassword')).toBe(false);
  });
});

// Tests for isDate
describe('isDate', () => {
  test('validates correct date format MM/DD/YYYY', () => {
    expect(isDate('04/12/2021')).toBe(true);
  });
  test('validates correct date format MM/D/YYYY', () => {
    expect(isDate('04/2/2021')).toBe(true);
  });
  test('rejects incorrect date format with month name', () => {
    expect(isDate('April 12, 2021')).toBe(false);
  });
  test('rejects incorrect format without year', () => {
    expect(isDate('04/12')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor', () => {
  test('validates correct 6-digit hex color', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
  });
  test('validates correct 3-digit hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
  });
  test('rejects hex color without #', () => {
    expect(isHexColor('FFFFFF')).toBe(false);
  });
  test('rejects incorrect hex color with non-hex characters', () => {
    expect(isHexColor('#ZZZZZZ')).toBe(false);
  });
});
