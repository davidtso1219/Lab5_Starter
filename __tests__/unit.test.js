// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test("Return a valid phone number which will be true", () => {
  expect(isPhoneNumber("916-900-9000")).toBe(true);
});
test("Test empty string to be false", () => {
  expect(isPhoneNumber("")).toBe(false);
});
test("Test () around area code", () => {
  expect(isPhoneNumber("(916)-900-9000")).toBe(true);
});
test("Test random alphabet in phone number to be false", () => {
  expect(isPhoneNumber("(916)-90a-90d0")).toBe(false);
});

test("Test typical email address to be true", () => {
  expect(isEmail("yoyoy@gmail.com")).toBe(true);
});
test("Test non typical email address to be true", () => {
  expect(isEmail("yoyoy@hotmail.ca")).toBe(true);
});
test("Test empty string to be false", () => {
  expect(isEmail("")).toBe(false);
});
test("Test no domain email address to be false", () => {
  expect(isEmail("yoyoyo")).toBe(false);
});


test("Test typical password to be true", () => {
  expect(isStrongPassword("DwaynetheRock")).toBe(true);
});

test("Test another typical password to be true", () => {
  expect(isStrongPassword("MidtermS1")).toBe(true);
});
test("Test empty string to be false", () => {
  expect(isStrongPassword("")).toBe(false);
});
test("Test special charac string to be false", () => {
  expect(isStrongPassword("^&*^!#*&@^")).toBe(false);
});

test("Test typical date to be true", () => {
  expect(isDate("5/7/2024")).toBe(true);
});
test("Test another typical date to be true", () => {
  expect(isDate("12/31/2024")).toBe(true);
});
test("Test empty string to be false", () => {
  expect(isDate("")).toBe(false);
});
test("Test year first to be false", () => {
  expect(isDate("2024/12/1")).toBe(false);
});

test("Test random hex color to be true", () => {
  expect(isHexColor("#77EA8A")).toBe(true);
});
test("Test random hex color to be true", () => {
  expect(isHexColor("#78ea8a")).toBe(true);
});
test("Test empty sting to be false", () => {
  expect(isHexColor("")).toBe(false);
});
test("Test invalid hex sting to be false", () => {
  expect(isHexColor("#abcdej")).toBe(false);
});

