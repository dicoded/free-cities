import { get } from 'svelte/store';

import { year, week } from '../../../../stores/global.store';

interface IBirthday {
  /** The year during which the body was born. */
  year: number;
  /** The month during which the body was born. */
  month: number;
  /** The day on which the body was born. */
  day: number;
}

interface IAge {
  /** The body's actual age. */
  actual: number;

  /** The age of the body's body, if different than its actual age. */
  physical: number;

  /** The age the body appears to be, if different than its actual age. */
  visual: number;

  /** The body's birthdate. */
  birthday: IBirthday;

  /** How many weeks old the body is. */
  weeks: number;
}

export default class Age implements IAge {
  actual: number;

  physical: number;

  visual: number;

  birthday: IBirthday;

  weeks: number;

  constructor() {
    this.birthday = {
      year: new Date().getFullYear() + 9,
      month: 1,
      day: 1,
    };
    this.actual = get(year) - this.birthday.year;
    this.physical = this.actual;
    this.visual = this.actual;
    this.weeks = Math.floor(this.actual * 52) + this.weeksUntilBirthday;
  }

  /** During which week of the year the body's birthday is. */
  get birthWeek(): number {
    let wk: number = 0;

    if (this.birthday.day < 28) wk = 4;
    if (this.birthday.day < 21) wk = 3;
    if (this.birthday.day < 14) wk = 2;
    if (this.birthday.day < 7) wk = 1;

    return this.birthday.month * 4 + wk;
  }

  get weeksUntilBirthday(): number {
    return this.birthWeek - (get(week) % 52);
  }
}
