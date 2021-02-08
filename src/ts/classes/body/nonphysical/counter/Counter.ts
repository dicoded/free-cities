import Count from './Count';

interface ICounter {
  /** Counts related to oral sex. */
  oral: Count;
  /** Counts related to vaginal sex. */
  vaginal: Count;
  /** Counts related to anal sex. */
  anal: Count;
  /** Counts related to mammary sex. */
  mammary: Count;
  /** How many times the body has given birth. */
  births: number;
}

export default class Counter implements ICounter {
  oral: Count;

  vaginal: Count;

  anal: Count;

  mammary: Count;

  births: number;

  constructor() {
    this.oral = new Count();
    this.vaginal = new Count();
    this.anal = new Count();
    this.mammary = new Count();
    this.births = 0;
  }

  /**
   * Sets all counts to 0.
   *
   * Should not ever be used outside of cheat or debug modes.
   */
  reset(): void {
    this.oral = new Count();
    this.vaginal = new Count();
    this.anal = new Count();
    this.mammary = new Count();
    this.births = 0;
  }

  /** Only includes sex acts. Does not include births. */
  get totalGiven(): number {
    return this.oral.given.total
      + this.vaginal.given.total
      + this.anal.given.total
      + this.mammary.given.total;
  }

  get totalReceived(): number {
    return this.oral.received.total
      + this.vaginal.received.total
      + this.anal.received.total
      + this.mammary.received.total;
  }
}
