// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Phone Number 1', () => {
  expect(isPhoneNumber('(123)456-7890')).toBe(true);
});

test('Phone Number 2', () => {
  expect(isPhoneNumber('999-999-9999')).toBe(true);
});

test('Phone Number 3', () => {
  expect(isPhoneNumber('onetwothree fourfivesix seveneightnine')).toBe(false);
});

test('Phone Number 3', () => {
  expect(isPhoneNumber('1000')).toBe(false);
});

test('Email 1', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('Email 2', () => {
  expect(isEmail('thomaspowell@gmail.com')).toBe(true);
});

test('Email 3', () => {
  expect(isEmail('student')).toBe(false);
});

test('Email 4', () => {
  expect(isEmail('tomatpowell.com')).toBe(false);
});

test('Password 1', () => {
  expect(isStrongPassword('A17644766!')).toBe(true);
});

test('Password 2', () => {
  expect(isStrongPassword('0bSDF_jieew')).toBe(true);
});

test('Password 3', () => {
  expect(isStrongPassword('cat')).toBe(false);
});

test('Password 4', () => {
  expect(isStrongPassword('dog')).toBe(false);
});

test('Date 1', () => {
  expect(isDate('01/01/2000')).toBe(true);
});

test('Date 2', () => {
  expect(isDate('12/12/1920')).toBe(true);
});

test('Date 3', () => {
  expect(isDate('July 5th')).toBe(false);
});

test('Date 4', () => {
  expect(isDate('2002/3/4')).toBe(false);
});

test('Hex Color 1', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});

test('Hex Color 2', () => {
  expect(isHexColor('#00b')).toBe(true);
});

test('Hex Color 3', () => {
  expect(isHexColor('#yellow')).toBe(false);
});

test('Hex Color 4', () => {
  expect(isHexColor('#green')).toBe(false);
});