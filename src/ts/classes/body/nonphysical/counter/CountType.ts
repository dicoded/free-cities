interface ICountType {
    /** How many times the body has done the act with a penis. */
    dick: number;
    /** How many times the body has done the act with a vagina. */
    pussy: number;
    /** How many times the body has done the act with an anus */
    ass: number;
    /** How many times the body has done the act total. */
    total: number;
}

export default class CountType implements ICountType {
  dick: number;

  pussy: number;

  ass: number;

  constructor() {
    this.dick = 0;
    this.pussy = 0;
    this.ass = 0;
  }

  get total(): number {
    return this.dick + this.pussy + this.ass;
  }
}
