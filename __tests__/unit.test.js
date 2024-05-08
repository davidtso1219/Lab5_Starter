// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// DIIIEEEE!!

test('phone number true 1', () => {
  expect(isPhoneNumber('704-822-8129')).toBe(true);
});
test('phone number true 2', () => {
  expect(isPhoneNumber('(777)-777-7777')).toBe(true);
});

test('phone number false 1', () => {
  expect(isPhoneNumber('hhhHHHaAAahHHHHHhhhHHHh')).toBe(false);
});

test('phone number false 2', () => {
  expect(isPhoneNumber('720-360-180')).toBe(false);
});


test('email test true 1', () => {
  expect(isEmail('hello@bitch.com')).toBe(true);
});

test('email test true 2', () => {
  expect(isEmail('myFrayingSanity@gmail.com')).toBe(true);
});

test('email test false 1', () => {
  expect(isEmail('AAAaAAAAAAAAaaaaaAaAAAAAAaaa')).toBe(false);
});

test('email test false 2', () => {
  expect(isEmail('@gmail.com')).toBe(false);
});

test('strong password test true 1', () => {
  expect(isStrongPassword('gaaah23314fjh')).toBe(true);
});

test('strong password test true 2', () => {
  expect(isStrongPassword('decf4rgt50012i')).toBe(true);
});

test('strong password test false 1', () => {
  expect(isStrongPassword('kil')).toBe(false);
});

test('strong password test false 2', () => {
  expect(isStrongPassword('me')).toBe(false);
});

test('date true 1', () => {
  expect(isDate('1/1/1111')).toBe(true);
});

test('date true 2', () => {
  expect(isDate('82/99/9999')).toBe(true);
}); //your program sucks this isn't a real date

test('date false 1', () => {
  expect(isDate('7')).toBe(false);
});

test('date false 2', () => {
  expect(isDate('bitch')).toBe(false);
});

test('hex true 1', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('hex true 2', () => {
  expect(isHexColor('#aaa')).toBe(true);
});

test('hex false 1', () => {
  expect(isHexColor('let me out')).toBe(false);
});

test('hex false 2', () => {
  expect(isHexColor('LET ME OUT')).toBe(false);
});