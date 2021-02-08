import { writable } from 'svelte/store';

interface ICount {
  /** How many times oral sex has occurred. */
  oral: number;
  /** How many times vaginal sex has occurred. */
  vaginal: number;
  /** How many times anal sex has occurred. */
  anal: number;
  /** How many times penetrative sex has occurred. */
  penetrative: number;
  /** How many times mammary sex has occurred. */
  mammary: number;
  /** How many births have occurred. */
  births: number;
}

class Count implements ICount {
  oral: number;

  vaginal: number;

  anal: number;

  penetrative: number;

  mammary: number;

  births: number;

  constructor() {
    this.oral = 0;
    this.vaginal = 0;
    this.anal = 0;
    this.penetrative = 0;
    this.mammary = 0;
    this.births = 0;
  }
}

/** Keeps track of global counts. */
export const globalCount = writable(new Count());

/** Keeps track of slave counts. */
export const slaveCount = writable(new Count());

/** Keeps track of PC counts. */
export const PCCount = writable(new Count());
