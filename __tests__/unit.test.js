// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//testing number
test('Valid phone number', () => {
  expect(isPhoneNumber('619-123-4567')).toBe(true);
});
test('Valid phone number with +1', () => {
  expect(isPhoneNumber('+1 619-123-4567')).toBe(true);
});
test('Invalid phone number no dashes', () => {
  expect(isPhoneNumber('619123456')).toBe(false);
});
test('Invalid phone number with a name instead', () => {
  expect(isPhoneNumber('thomasapowell')).toBe(false);
});

//testing email
test('Valid email', () => {
  expect(isEmail('bruh@goated.com')).toBe(true);
});

test('Valid email', () => {
  expect(isEmail('liam@ucsd.edu')).toBe(true);
});

test('Invalid email without top-level domain', () => {
  expect(isEmail('gavin@gmail')).toBe(false);
});

test('Invalid email with spaces', () => {
  expect(isEmail('powell @porfessor.com')).toBe(false);
});

//testing password
test('Valid strong password', () => {
  expect(isStrongPassword('theGoat123')).toBe(true);
});

test('Valid strong password with underscore', () => {
  expect(isStrongPassword('better_Goat123')).toBe(true);
});

test('Invalid weak password', () => {
  expect(isStrongPassword('bru')).toBe(false);
});

test('Invalid password starting with number', () => {
  expect(isStrongPassword('2goat')).toBe(false);
});

//testing date

test('Valid date', () => {
  expect(isDate('5/7/2024')).toBe(true);
});

test('Valid date', () => {
  expect(isDate('12/15/2022')).toBe(true);
});

test('Nah just wrong', () => {
  expect(isDate('this should be wrong')).toBe(false);
});

test('No just wrong', () => {
  expect(isDate('2/jk/2023')).toBe(false);
});

//testing hex

test('Valid hex color', () => {
  expect(isHexColor('#d00')).toBe(true);
});

test('Valid hex color', () => {
  expect(isHexColor('#b00')).toBe(true);
});

test('Invalid hex color with invalid characters', () => {
  expect(isHexColor('#ghijkl')).toBe(false);
});

test('Invalid hex color', () => {
  expect(isHexColor('kl0000')).toBe(false);
});
