import Hair from './Hair';

interface IHairs {
  /** Properties pertaining to the hair on the body's head. */
  main: Hair;

  /** Properties pertaining to the body's eyebrows. */
  eyebrows: Hair;

  /** Properties pertaining to the body's armpit hair. */
  armpits: Hair;

  /** Properties pertaining to the body's body hair. */
  body: Hair;

  /** Properties pertaining to the body's pubic hair. */
  pubic: Hair;
}

export default class Hairs implements IHairs {
  main: Hair;

  eyebrows: Hair;

  armpits: Hair;

  body: Hair;

  pubic: Hair;

  constructor() {
    this.main = new Hair();
    this.eyebrows = new Hair();
    this.armpits = new Hair();
    this.body = new Hair();
    this.pubic = new Hair();
  }
}
