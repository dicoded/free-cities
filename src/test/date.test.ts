import {
  formatMonth,
  formatDay,
  isLeapYear,
  formatDate,
  getDays,
  // getCalendarPage,
  // getDayPropsHandler,
  getMonths,
  // areDatesEquivalent,
} from '@util/date';

describe('formatMonth', () => {
  const error = 'Input must be an integer between 0 and 11.';

  it('returns a string based on a given input', () => {
    expect(formatMonth(0)).toBe('January');
  });
  it('throws an exception if the input is less than zero', () => {
    expect(() => formatMonth(-1)).toThrow(error);
  });
  it('throws an exception if the input is greater than twelve', () => {
    expect(() => formatMonth(20)).toThrow(error);
  });
});

describe('formatDay', () => {
  const error = 'Input must be an integer between 1 and 31.';

  it('returns a string based on a given input', () => {
    expect(formatDay(10)).toBe('10th');
    expect(formatDay(17)).toBe('17th');
  });
  it('throws an exception if the number is less than one', () => {
    expect(() => formatDay(0)).toThrow(error);
  });
  it('throws an exception if the number is greater than 31', () => {
    expect(() => formatDay(40)).toThrow(error);
  });
});

describe('isLeapYear', () => {
  it('returns true if the year is a leap year', () => {
    expect(isLeapYear(2020)).toBe(true);
  });
  it('returns false if the year is not a leap year', () => {
    expect(isLeapYear(2019)).toBe(false);
  });
});

describe('formatDate', () => {
  it('returns a string based on a given input', () => {
    expect(formatDate(new Date(2020, 0, 10))).toBe('January 10th, 2020');
  });
});

describe('getDays', () => {
  const error = 'Input must be an integer between 1 and 12.';
  it('returns a number based on a given input', () => {
    expect(getDays(1)).toBe(31);
    expect(getDays(2, 2020)).toBe(29);
    expect(getDays(2, 2019)).toBe(28);
  });
  it('throws an exception if the number is less than one', () => {
    expect(() => getDays(0)).toThrow(error);
  });
  it('throws an exception if the number is greater than twelve', () => {
    expect(() => getDays(15)).toThrow(error);
  });
});

describe('getMonths', () => {
  it('returns a list of months', () => {
    expect(getMonths(new Date(2020), new Date(2022))).toBeInstanceOf(Array);
  });
});

describe('getCalendarPage', () => {

});

describe('getDayPropsHandler', () => {

});
