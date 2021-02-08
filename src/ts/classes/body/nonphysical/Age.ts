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
    this.actual = (new Date().getFullYear() + 27) - this.birthday.year;
    this.physical = this.actual;
    this.visual = this.actual;
    this.weeks = 0;
  }

  get birthWeek(): number {
    let week: number = 0;

    if (this.birthday.day < 28) week = 4;
    if (this.birthday.day < 21) week = 3;
    if (this.birthday.day < 14) week = 2;
    if (this.birthday.day < 7) week = 1;

    return this.birthday.month - 1 * 4 + week;
  }
}
