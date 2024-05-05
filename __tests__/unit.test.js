// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isValidPhoneNumber', () => {
  expect(isPhoneNumber('(523)-234-2345')).toBe(true);
})
test('isValidPhoneNumber2', () => {
  expect(isPhoneNumber('(734)-134-5234')).toBe(true);
})
test('isNotValidPhoneNumber', () => {
  expect(isPhoneNumber('hello world')).toBe(false);
})
test('isNotValidPhoneNumber2', () => {
  expect(isPhoneNumber('342-234-123')).toBe(false);
})
test('isValidEmail', () => {
  expect(isEmail('asdf@gmail.com')).toBe(true);
})
test('isValidEmail2', () => {
  expect(isEmail('bruh1867@hotmail.com')).toBe(true);
})
test('isNotValidEmail', () => {
  expect(isEmail('hello world')).toBe(false);
})
test('isNotValidEmail2', () => {
  expect(isEmail('@@@')).toBe(false);
})
test('isValidPassword', () => {
  expect(isStrongPassword('asdfw2342')).toBe(true);
})
test('isValidPassword2', () => {
  expect(isStrongPassword('hel23fad23')).toBe(true);
})
test('isNotValidPassword', () => {
  expect(isStrongPassword('bet')).toBe(false);
})
test('isNotValidPassword2', () => {
  expect(isStrongPassword('asdfasdfasdkfjasdfsadf')).toBe(false);
})
test('isValidDate', () => {
  expect(isDate('3/25/1234')).toBe(true);
})
test('isValidDate2', () => {
  expect(isDate('31/91/2024')).toBe(true);
})
test('isNotValidDate', () => {
  expect(isDate('01/01/04')).toBe(false);
})
test('isNotValidDate2', () => {
  expect(isDate('12341234')).toBe(false);
})
test('isValidHexColor', () => {
  expect(isHexColor('#234535')).toBe(true);
})
test('isValidHexColor2', () => {
  expect(isHexColor('#236')).toBe(true);
})
test('isNotValidHexColor', () => {
  expect(isHexColor('hello')).toBe(false);
})
test('isNotValidHexColor2', () => {
  expect(isHexColor('#5234')).toBe(false);
})