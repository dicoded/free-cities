export enum Scarring {
  LIGHT = 'light',
  SOME = 'some',
  HEAVY = 'heavy',
  EXTREME = 'extreme',
}

interface IScars {
  /** Burn scars. */
  burn: Scarring | null;
  /** Scars from chains or manacles. */
  chain: Scarring | null;
  /** Scars from self-harm. */
  cutting: Scarring | null;
  /** "Exotic" scars. */
  exotic: Scarring | null;
  /** Generic scars. */
  generic: Scarring | null;
  /** Scars designed to frighten. */
  menacing: Scarring | null;
  /** Scars left over from surgery. */
  surgical: Scarring | null;
  /** Scars from whippings. */
  whip: Scarring | null;
}

export default class Scars implements IScars {
  burn: Scarring | null;

  chain: Scarring | null;

  cutting: Scarring | null;

  exotic: Scarring | null;

  generic: Scarring | null;

  menacing: Scarring | null;

  surgical: Scarring | null;

  whip: Scarring | null;

  constructor() {
    this.burn = null;
    this.chain = null;
    this.cutting = null;
    this.exotic = null;
    this.generic = null;
    this.menacing = null;
    this.surgical = null;
    this.whip = null;
  }
}
