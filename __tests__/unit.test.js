// unit.test.js


import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
 } from '../code-to-unit-test/unit-test-me';
 
 
 // TODO - Part 2
 
 
 //number
 test('true test 1 for phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
 });
 
 
 test('true test 2 for phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
 });
 
 
 test('false test 3 for phone number', () => {
  expect(isPhoneNumber('123-45-6789')).toBe(false);
 });
 
 
 test('false test 4 for phone number', () => {
  expect(isPhoneNumber('123456-89-1234')).toBe(false);
 });
 
 
 //email
 
 
 test('true test 5 for email', () => {
  expect(isEmail('username@example.com')).toBe(true);
 });
 test('true test 6 for email', () => {
  expect(isEmail('user_name@domain_site.co')).toBe(true);
 });
 
 
 test('false test 7 for email', () => {
  expect(isEmail('username@examplecom')).toBe(false);
 });
 
 
 test('false test 8 for email', () => {
  expect(isEmail('user@domain1234.commm')).toBe(false);
 });
 
 
 // password
 
 
 test('true test 9 for password', () => {
  expect(isStrongPassword('Abcd1234')).toBe(true);
 });
 
 
 test('true test 10 for password', () => {
  expect(isStrongPassword('A1234567890123')).toBe(true);
 });
 
 
 test('false test 11 for password', () => {
  expect(isStrongPassword('A1b')).toBe(false);
 });
 
 
 test('false test 12 for password', () => {
  expect(isStrongPassword('1abcdEFG')).toBe(false);
 });
 
 
 //date
 
 
 test('true test 13 for date', () => {
  expect(isDate('12/25/2020')).toBe(true);
 });
 
 
 test('true test 14 for date', () => {
  expect(isDate('1/1/2023')).toBe(true);
 });
 
 
 test('false test 15 for date', () => {
  expect(isDate('12-25-2020')).toBe(false);
 });
 test('false test 16 for date', () => {
  expect(isDate('12/25/20')).toBe(false);
 });
 
 
 //color
 test('true test 17 for color', () => {
  expect(isHexColor('#1A2B3C')).toBe(true);
 });
 
 
 test('true test 18 for color', () => {
  expect(isHexColor('#ABC')).toBe(true);
 });
 
 
 test('false test 19 for color', () => {
  expect(isHexColor('#098876678')).toBe(false);
 });
 
 
 test('false test 20 for color', () => {
  expect(isHexColor('#1234')).toBe(false);
 });
 
 
 
 
 
 
 
 