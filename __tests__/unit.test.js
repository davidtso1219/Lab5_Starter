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
  test('validates correct phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('rejects incorrect phone number', () => {
    expect(isPhoneNumber('123-45-6789')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail', () => {
  test('validates correct email', () => {
    expect(isEmail('test@example.com')).toBe(true);
  });
  test('rejects incorrect email', () => {
    expect(isEmail('test@example')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword', () => {
  test('validates strong password', () => {
    expect(isStrongPassword('Example123!')).toBe(true);
  });
  test('rejects weak password', () => {
    expect(isStrongPassword('examp')).toBe(false);
  });
});

// Tests for isDate
describe('isDate', () => {
  test('validates correct date', () => {
    expect(isDate('2021-04-12')).toBe(true);
  });
  test('rejects incorrect date', () => {
    expect(isDate('April 12, 2021')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor', () => {
  test('validates correct hex color', () => {
    expect(isHexColor('#FFFFFF')).toBe(true);
  });
  test('rejects incorrect hex color', () => {
    expect(isHexColor('FFFFFF')).toBe(false);
  });
});
