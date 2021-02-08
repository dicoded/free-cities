/** @param month The number of the month. Zero-based index. */
export function formatMonth(month: number) {
  if (month < 0 || month > 11) {
    throw new Error('Input must be an integer between 0 and 11.');
  }

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[month];
}

/** @param day The calendar date to format. Non-zero-based index. */
export function formatDay(day: number) {
  if (day < 1 || day > 31) {
    throw new Error('Input must be an integer between 1 and 31.');
  }

  const suffixes = [
    'st',
    'nd',
    'rd',
    'th',
  ];

  let res = day / 10;

  if (res > 1) {
    res = ((day / 10) - 1) * 10;
  } else {
    res *= 10;
  }

  if (res > 4) {
    res = 4;
  }

  return `${day}${suffixes[res - 1]}`;
}

/** Returns true is the given year is a leap year. */
export const isLeapYear = (year: number) => year % 4 === 0;

/** Checks if two given dates are equivalent. */
export const areDatesEquivalent = (a: Date, b: Date) => a.getDate() === b.getDate()
  && a.getMonth() === b.getMonth()
  && a.getFullYear() === b.getFullYear();

/**
 * Returns the given date in a more readable form.
 *
 * Input must be a valid date object.
 *
 * @example
 * formatDate(new Date(2020, 1, 10))  // 'January 10th, 2020'
 */
export function formatDate(date: Date) {
  return `${formatMonth(date.getMonth())} ${formatDay(date.getDate())}, ${date.getFullYear()}`;
}

/**
 * Returns the number of days in a given month.
 *
 * Uses the current year if one is not given.
 */
export function getDays(month: number, year: number = new Date().getFullYear()) {
  const months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 31,
    July: 30,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  if (month < 1
    || month > 12
  ) {
    throw new Error('Input must be an integer between 1 and 12.');
  }

  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  }

  return Object.values(months)[month - 1];
}

export function getCalendarPage(month: number, year: number, dayProps: any, weekStart: number = 0) {
  const date = new Date(year, month, 1);
  date.setDate(date.getDate() - date.getDay() + weekStart);

  const nextMonth = month === 11 ? 0 : month + 1;
  const weeks = [];

  while (date.getMonth() !== nextMonth || date.getDay() !== weekStart || weeks.length !== 6) {
    if (date.getDay() === weekStart) weeks.unshift({ days: [], id: `${year}${month}${year}${weeks.length}` });

    const updated = {
      partOfMonth: date.getMonth() === month,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      date: new Date(date),
      ...dayProps(date),
    };
    // @ts-ignore TODO: fix this
    weeks[0].days.push(updated);
    date.setDate(date.getDate() + 1);
  }

  weeks.reverse();

  return { month, year, weeks };
}

export function getDayPropsHandler(start: Date, end: Date, selectableCallback: ((arg0: Date) => any) | null) {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return (date: Date) => {
    const isInRange = date >= start && date <= end;

    return {
      isInRange,
      selectable: isInRange && (!selectableCallback || selectableCallback(date)),
      isToday: date.getTime() === today.getTime(),
    };
  };
}

export function getMonths(
  start: Date,
  end: Date,
  selectableCallback: ((arg0: Date) => any) | null = null,
  weekStart = 0,
) {
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const endDate = new Date(end.getFullYear(), end.getMonth() + 1, 1);
  const months = [];
  const date = new Date(start.getFullYear(), start.getMonth(), 1);
  const dayPropsHandler = getDayPropsHandler(start, end, selectableCallback);

  while (date < endDate) {
    months.push(getCalendarPage(date.getMonth(), date.getFullYear(), dayPropsHandler, weekStart));
    date.setMonth(date.getMonth() + 1);
  }

  return months;
}
