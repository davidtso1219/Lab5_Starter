// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//phone tests
test('valid phone 1: 818-777-5555', () => {
  expect(isPhoneNumber("818-777-5555")).toBe(true);
});

test('valid phone 2: 919-733-4545', () => {
  expect(isPhoneNumber("919-733-4545")).toBe(true);
});

test('invalid phone 1: 3109178236', () => {
  expect(isPhoneNumber("3109178236")).toBe(false);
});

test('invalid phone 2: 981-345-a987', () => {
  expect(isPhoneNumber("981-345-a987")).toBe(false);
});

//email tests
test('valid email 1: bob@gmail.com', () => {
  expect(isEmail("bob@gmail.com")).toBe(true);
});

test('valid email 2: drink_milk_73@hotmail.com', () => {
  expect(isEmail("drink_milk_73@hotmail.com")).toBe(true);
});

test('invalid email 1: jumping_rabbit_59', () => {
  expect(isEmail("jumping_rabbit_59")).toBe(false);
});

test('invalid email 2: _underscore-starter@yahoo.com', () => {
  expect(isEmail("_underscore-starter@yahoo.com")).toBe(false);
});

//strong password tests
test('strong password 1: cheese', () => {
  expect(isStrongPassword("cheese")).toBe(true);
});

test('strong password 2: applez98_', () => {
  expect(isStrongPassword("applez98_")).toBe(true);
});

test('weak password 1: bee', () => {
  expect(isStrongPassword("bee")).toBe(false);
});

test('weak password 2: %^adad', () => {
  expect(isStrongPassword("%^adad")).toBe(false);
});

//date tests
test('valid date 1: 4/4/2004', () => {
  expect(isDate("4/4/2004")).toBe(true);
});

test('valid date 2: 12/12/2012', () => {
  expect(isDate("12/12/2012")).toBe(true);
});

test('invalid date 1: 442004', () => {
  expect(isDate("442004")).toBe(false);
});

test('invalid date 2: 919/72/3000', () => {
  expect(isDate("919/72/3000")).toBe(false);
});

//hex color tests
test('valid hex color 1: #FFF', () => {
  expect(isHexColor("#FFF")).toBe(true);
});

test('valid hex color 2: 123456', () => {
  expect(isHexColor("123456")).toBe(true);
});

test('invalid hex color 1: #Z27890', () => {
  expect(isHexColor("#Z27890")).toBe(false);
});

test('invalid hex color 2: 1234', () => {
  expect(isHexColor("1234")).toBe(false);
});
