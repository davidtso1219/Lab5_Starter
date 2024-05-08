// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
describe('isPhoneNumber tests', () => {
  test('a vaild phone number 1', () => {
    expect(isPhoneNumber('111-222-3333')).toBe(true);
  })
  test('a vaild phone number 2', () => {
    expect(isPhoneNumber('(222)-333-4444')).toBe(true);
  })
  test('a not vaild phone number 1', () => {
    expect(isPhoneNumber('11-222-3333')).toBe(false);
  })
  test('a not vaild phone number 2', () => {
    expect(isPhoneNumber('111-222-33333')).toBe(false);
  })
})

describe('isEmail tests', () => {
  test('a vaild email 1', () => {
    expect(isEmail('jianing@email.com')).toBe(true);
  })
  test('a vaild email 2', () => {
    expect(isEmail('jianing@ucsd.email.com')).toBe(true);
  })
  test('a not vaild email 1', () => {
    expect(isEmail('jianing@email')).toBe(false);
  })
  test('a not vaild email 2', () => {
    expect(isEmail('jianingemail.com')).toBe(false);
  })
})

describe('isStrongPassword', () => {
  test('a strong password 1', () => {
    expect(isStrongPassword('a12ab12cd')).toBe(true)
  })
  test('a strong password 2', () => {
    expect(isStrongPassword('b1316hdsj')).toBe(true)
  })
  test('a strong password 1', () => {
    expect(isStrongPassword('5a12ab12cd')).toBe(false)
  })
  test('a strong password 2', () => {
    expect(isStrongPassword('a12ab12cdjsiandasdasf')).toBe(false)
  })
})

desribe('isDate', () => {
  test('a vaild date 1', () => {
    expect(isDate('01/02/1998')).toBe(true)
  })
  test('a vaild date 2', () => {
    expect(isDate('1/2/1998')).toBe(true)
  })
  test('a not vaild date 1', () => {
    expect(isDate('01/02/199')).toBe(false)
  })
  test('a vaild date 2', () => {
    expect(isDate('a/02/1998')).toBe(false)
  })
})

desribe('isHexColor', () => {
  test('a vaild hexcolor 1', () => {
    expect(isHexColor('#ABC')).toBe(true)
  })
  test('a vaild hexcolor 1', () => {
    expect(isHexColor('AABBCC')).toBe(true)
  })
  test('a not vaild hexcolor 1', () => {
    expect(isHexColor('#12445')).toBe(false)
  })
  test('a not vaild hexcolor 2', () => {
    expect(isHexColor('#HISUBC')).toBe(false)
  })
})
