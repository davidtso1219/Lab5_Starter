// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';
// TODO - Part 2
describe('Testing isPhoneNumber', () => {
  test('Valid phone number with area code', () => {
    expect(isPhoneNumber('(858) 456-7890')).toBe(true);
  });

  test('Valid phone number without area code', () => {
    expect(isPhoneNumber('456-7890')).toBe(true);
  });

  test('Invalid phone number with letters', () => {
    expect(isPhoneNumber('858-ABC-7890')).toBe(false);
  });

  test('Invalid phone number, incomplete digits', () => {
    expect(isPhoneNumber('858-45-7890')).toBe(false);
  });
});

describe('Testing isEmail', () => {
  test('Valid email', () => {
    expect(isEmail('cse@lab.com')).toBe(true);
  });

  test('Valid email with "_"', () => {
    expect(isEmail('akrov_@ucsd.edu')).toBe(true);
  });

  test('Invalid email, no domain', () => {
    expect(isEmail('test@')).toBe(false);
  });

  test('Invalid email, missing @', () => {
    expect(isEmail('ucsd.com')).toBe(false);
  });
});

describe('Testing isStrongPassword', () => {
  test('Valid strong password', () => {
    expect(isStrongPassword('a123_567')).toBe(true);
  });

  test('Valid strong password with maximum length', () => {
    expect(isStrongPassword('manunitedaresog')).toBe(true);
  });

  test('Invalid password, too short', () => {
    expect(isStrongPassword('lab')).toBe(false);
  });

  test('Invalid password, special characters', () => {
    expect(isStrongPassword('bruno@18')).toBe(false);
  });
});

describe('Testing isDate', () => {
  test('Valid date', () => {
    expect(isDate('03/15/2005')).toBe(true);
  });

  test('Valid single-digit month and day', () => {
    expect(isDate('1/1/2024')).toBe(true);
  });

  test('Invalid date, incorrect format', () => {
    expect(isDate('2024/12/31')).toBe(false);
  });

  test('Invalid Year, day out of range', () => {
    expect(isDate('3/20/20245')).toBe(false);
  });
});

describe('Testing isHexColor', () => {
  test('Valid 3-character hex color', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });

  test('Valid 6-character hex color', () => {
    expect(isHexColor('#A1B2C3')).toBe(true);
  });

  test('Invalid hex color, too many characters', () => {
    expect(isHexColor('#A1B2C35')).toBe(false);
  });

  test('Invalid hex color, contains non-hex character', () => {
    expect(isHexColor('#GHI')).toBe(false);
  });
});
